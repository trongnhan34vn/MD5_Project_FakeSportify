package com.md5_project.controller;

import com.md5_project.dto.response.ResponseMessage;
import com.md5_project.model.Artist;
import com.md5_project.model.Audio;
import com.md5_project.service.IArtistService;
import com.md5_project.service.IAudioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/audio")
public class AudioController {
    @Autowired
    IAudioService audioService;

    @Autowired
    IArtistService artistService;

    @GetMapping("/find-all")
    public ResponseEntity<?> findAll() {

        return ResponseEntity.ok(audioService.findAll());
    }

    @GetMapping("/find-by-id/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {

        return ResponseEntity.ok(audioService.findById(id));
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Audio audio) {
        Audio newAudio = audioService.save(audio);
        if (newAudio == null) {
            return new ResponseEntity<>(new ResponseMessage("Create Failed!"), HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>(new ResponseMessage("Create Success!"), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody Audio audio) {
        Audio newAudio = audioService.save(audio);
        if (newAudio == null) {
            return new ResponseEntity<>(new ResponseMessage("Update Failed!"), HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>(new ResponseMessage("Create Success!"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try {
            audioService.remove(id);
            return new ResponseEntity<>(new ResponseMessage("Remove Success!"), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(new ResponseMessage("Remove Failed!"), HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @GetMapping("/search/{search}")
    public ResponseEntity<?> search(@PathVariable String search) {
        List<Audio> audioList = audioService.searchAudioByName(search);
        if (audioList.isEmpty()) {
            return new ResponseEntity<>(new ResponseMessage("NOT FOUND"), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(audioList, HttpStatus.OK);
    }

    @GetMapping("/searchPaging")
    public ResponseEntity<?> searchPagingByName(@RequestParam String search, Pageable pageable) {
        pageable = PageRequest.of(pageable.getPageNumber(), 4);
        Page<Audio> page = audioService.searchAudioByName(search, pageable);
        List<Audio> audioList = page.getContent();
        if (audioList.isEmpty()) {
            return new ResponseEntity<>(new ResponseMessage("NOT FOUND!"), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(audioList, HttpStatus.OK) ;
    }

    @GetMapping("/find-audio-by-category-and-artist")
    public ResponseEntity<?> findAudioByCategoryAndArtist(@RequestParam Long categoryId, @RequestParam Long artistId) {
        List<Audio> audioList = audioService.findAudioByCategoryAndArtist(categoryId,artistId);
        if (audioList.isEmpty()) {
            return new ResponseEntity<>(new ResponseMessage("NOT FOUND"), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(audioList, HttpStatus.OK);
    }
}
