package com.md5_project.controller;

import com.md5_project.service.IArtistService;
import com.md5_project.service.IAudioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @Autowired
    IAudioService audioService;

    @Autowired
    IArtistService artistService;
    @GetMapping("/audio")
    public ResponseEntity<?> test_audio() {
        return ResponseEntity.ok(audioService.findAll());
    }

    @GetMapping("/artist")
    public ResponseEntity<?> test_artist() {
        return ResponseEntity.ok(artistService.findAll());
    }

}
