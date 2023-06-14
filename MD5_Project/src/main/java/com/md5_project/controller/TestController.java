package com.md5_project.controller;

import com.md5_project.dto.request.PlaylistDTO;
import com.md5_project.dto.response.ResponseMessage;
import com.md5_project.model.Audio;
import com.md5_project.model.Playlist;
import com.md5_project.service.IArtistService;
import com.md5_project.service.IAudioService;
import com.md5_project.service.IPlaylistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
public class TestController {
    @Autowired
    IAudioService audioService;

    @Autowired
    IArtistService artistService;

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

    @PostMapping("/playlist/createNew")
    public ResponseEntity<?> createNewPlaylist() {
        PlaylistDTO playlistDTO = new PlaylistDTO("Daily Mix");
        Playlist playlist = new Playlist();
        playlist.setName(playlistDTO.getName());
        Iterable<Audio> audios = audioService.findAll();
        Set<Audio> audioList = new HashSet<>();
        for (int i = 0; i < 10; i++) {
            audios.forEach(audioList::add);
        }
        playlist.setAudios(audioList);
        playlistService.save(playlist);
        return ResponseEntity.ok(new ResponseMessage("Success!"));
    }

}
