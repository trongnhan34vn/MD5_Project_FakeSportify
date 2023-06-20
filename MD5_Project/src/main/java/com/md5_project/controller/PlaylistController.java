package com.md5_project.controller;

import com.md5_project.dto.request.PlaylistDTO;
import com.md5_project.dto.response.PlaylistResponse;
import com.md5_project.dto.response.ResponseMessage;
import com.md5_project.model.Audio;
import com.md5_project.model.Playlist;
import com.md5_project.model.User;
import com.md5_project.service.IArtistService;
import com.md5_project.service.IAudioService;
import com.md5_project.service.IPlaylistService;
import com.md5_project.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/playlist")
@CrossOrigin(origins = "*")
public class PlaylistController {
    @Autowired
    IPlaylistService playlistService;
    @Autowired
    IArtistService artistService;
    @Autowired
    IAudioService audioService;
    @Autowired
    IUserService userService;

    @GetMapping("/find-all")
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok(playlistService.findAll());
    }

    @GetMapping("/find-by-id/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        Optional<Playlist> playlist = playlistService.findById(id);
        return new ResponseEntity<>(playlist.get(), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody PlaylistDTO playlistDTO) {
        Playlist newPlaylist = new Playlist();
        List<Playlist> playlists = (List<Playlist>) playlistService.findPlaylistByUserId(playlistDTO.getUserId());
        int count;
        if (playlists.size() == 0) {
            count = 1;
        } else {
            count = playlists.size() + 1;
        }
        Set<Audio> audios = new HashSet<>();
        newPlaylist.setAudios(audios);
        newPlaylist.setName(playlistDTO.getName() + count);
        newPlaylist.setStatus(playlistDTO.isStatus());
        newPlaylist.setUser(userService.findById(playlistDTO.getUserId()).orElseThrow(() -> new RuntimeException("NOT FOUND USER")));
        if (playlistService.save(newPlaylist) == null) {
            return new ResponseEntity<>(new ResponseMessage("Create Failed!"), HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>(playlistService.save(newPlaylist), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody PlaylistDTO playlistDTO) {
        User user = userService.findById(playlistDTO.getUserId()).orElseThrow(()-> new RuntimeException("User not found"));
        Playlist playlist = new Playlist(playlistDTO.getId(), playlistDTO.getName(), playlistDTO.getImage(),  playlistDTO.isStatus(), user, playlistDTO.getAudios());
        Playlist newPlaylist = playlistService.save(playlist);
        if (newPlaylist == null) {
            return new ResponseEntity<>(new ResponseMessage("Update Failed!"), HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>(new ResponseMessage("Update Success!"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try {
            playlistService.remove(id);
            return new ResponseEntity<>(new ResponseMessage("Remove Success!"), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(new ResponseMessage("Remove Failed!"), HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/find-by-name")
    public ResponseEntity<?> findByName(@RequestParam String name) {
        List<Playlist> playlists = playlistService.findPlaylistByName(name);
        return new ResponseEntity<>(playlists, HttpStatus.OK);
    }

    @GetMapping("/find-by-user-id/{id}")
    public ResponseEntity<?> findByUserId(@PathVariable Long id) {
        List<Playlist> playlists = (List<Playlist>) playlistService.findPlaylistByUserId(id);
        return new ResponseEntity<>(playlists, HttpStatus.OK);
    }

    @GetMapping("/find-by-user-id-paging")
    public ResponseEntity<?> findByUserIdPaging(
            @RequestParam Long userId,
            @RequestParam int page,
            @RequestParam int size
    ) {
        List<Playlist> list = (List<Playlist>) playlistService.findPlaylistByUserId(userId);
        double num = (double) list.size() / (double) size;
        int totalPages = (int) Math.ceil(num);

        Page<Playlist> playlists = playlistService.findPlaylistByUserIdPaging(userId, page, size);
        return new ResponseEntity<>(new PlaylistResponse(totalPages, playlists.getContent()), HttpStatus.OK);
    }

    @PatchMapping("/insert-audio-playlist")
    public ResponseEntity<?> insertAudioToPlaylist(@RequestParam Long playlistId, @RequestParam Long audioId) {
        Playlist playlist = playlistService.insertAudioToPlaylist(playlistId, audioId);
        if (playlist == null) {
            return new ResponseEntity<>(new ResponseMessage("INSERT FAILED"), HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>(playlist, HttpStatus.OK);
    }

    @DeleteMapping("/delete-audio-from-playlist")
    public ResponseEntity<?> deleteAudioFromPlaylist(@RequestParam Long playlistId, @RequestParam Long audioId) {
        boolean result = playlistService.removeAudioFromPlaylist(playlistId, audioId);
        if (!result) {
            return new ResponseEntity<>(new ResponseMessage("Delete Error!"), HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>(new ResponseMessage("Delete Success!"), HttpStatus.OK);
    }
}
