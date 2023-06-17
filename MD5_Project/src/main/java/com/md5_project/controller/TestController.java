package com.md5_project.controller;

import com.md5_project.dto.request.PlaylistDTO;
import com.md5_project.dto.response.ResponseMessage;
import com.md5_project.model.Artist;
import com.md5_project.model.Audio;
import com.md5_project.model.Category;
import com.md5_project.model.Playlist;
import com.md5_project.service.IArtistService;
import com.md5_project.service.IAudioService;
import com.md5_project.service.ICategoryService;
import com.md5_project.service.IPlaylistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class TestController {
    @Autowired
    IAudioService audioService;

    @Autowired
    IArtistService artistService;

    @Autowired
    ICategoryService categoryService;

    @Autowired
    IPlaylistService playlistService;

    @GetMapping("/audio")
    public ResponseEntity<?> test_audio() {
        return ResponseEntity.ok(audioService.findAll());
    }

    @GetMapping("/artist")
    public ResponseEntity<?> test_artist() {
        return ResponseEntity.ok(artistService.findAll());
    }

    @PostMapping("/playlist/create-daily-mix")
    public ResponseEntity<?> createNewPlaylist() {
        Iterable<Playlist> playlists = playlistService.findAll();
        for (int i = 0; i < 5; i++) {
            String playlistName = "Daily Mix " + (i + 1);
            if (checkPlaylistExist(playlists, playlistName)) {
                return new ResponseEntity<>(new ResponseMessage("Playlist " + playlistName + " existed!"), HttpStatus.FOUND);
            }
            PlaylistDTO playlistDTO = new PlaylistDTO(playlistName);
            Playlist playlist = new Playlist();
            playlist.setName(playlistDTO.getName());
            Iterable<Audio> audios = audioService.findAll();
            List<Audio> allAudios = new ArrayList<>();
            audios.forEach(allAudios::add);
            List<Audio> audioList = new ArrayList<>();
            do {
                int randomIndex = (int) Math.floor(Math.random() * allAudios.size());
                audioList.add(allAudios.get(randomIndex));
            } while (audioList.size() < 10);
            playlist.setAudios(audioList);
            playlistService.save(playlist);
        }
        return new ResponseEntity<>(new ResponseMessage("Create Success!"), HttpStatus.OK);
    }

    private boolean checkPlaylistExist(Iterable<Playlist> playlists, String plaulistName) {
        for (Playlist playlist : playlists) {
            if (playlist.getName().equals(plaulistName)) {
                return true;
            }
        }
        return false;
    }


}
