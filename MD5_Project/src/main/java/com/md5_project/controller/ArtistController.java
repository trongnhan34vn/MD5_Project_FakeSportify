package com.md5_project.controller;

import com.md5_project.dto.response.ResponseMessage;
import com.md5_project.model.Album;
import com.md5_project.model.Artist;
import com.md5_project.model.Audio;
import com.md5_project.service.IArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/artist")
public class ArtistController {
    @Autowired
    IArtistService artistService;
    @GetMapping("/find-all")
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok(artistService.findAll());
    }

    @GetMapping("/find-by-id/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        return ResponseEntity.ok(artistService.findById(id));
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Artist artist) {
        Artist newArtist = artistService.save(artist);
        if (newArtist == null) {
            return new ResponseEntity<>(new ResponseMessage("Create Failed!"), HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>(new ResponseMessage("Create Success!"), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody Artist artist) {
        Artist newArtist = artistService.save(artist);
        if (newArtist == null) {
            return new ResponseEntity<>(new ResponseMessage("Update Failed!"), HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>(new ResponseMessage("Create Success!"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try {
            artistService.remove(id);
            return new ResponseEntity<>(new ResponseMessage("Remove Success!"), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(new ResponseMessage("Remove Failed!"),  HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @GetMapping("/search/{search}")
    public ResponseEntity<?> search(@PathVariable String search) {
        List<Artist> artistList = artistService.searchArtistByName(search);
        return new ResponseEntity<>(artistList, HttpStatus.OK);
    }

    @GetMapping("/searchPaging")
    public ResponseEntity<?> searchPaging(@RequestParam String search, Pageable pageable) {
        pageable = PageRequest.of(pageable.getPageNumber(), 4);
        Page<Artist> page = artistService.searchArtistByName(search, pageable);
        List<Artist> audioList = page.getContent();
        return new ResponseEntity<>(audioList, HttpStatus.OK) ;
    }


    @GetMapping("/find-artist-by-category")
    public ResponseEntity<?> findArtistByCategory(@RequestParam Long categoryId, Pageable pageable) {
        pageable = PageRequest.of(pageable.getPageNumber(), 5);
        Page<Artist> page = artistService.searchArtistByCategory(categoryId, pageable);
        List<Artist> result = page.getContent();
        return new ResponseEntity<>(result, HttpStatus.OK) ;
    }

    @GetMapping("/find-artist-by-playlist/{id}")
    public ResponseEntity<?> findArtistByPlaylist(@PathVariable Long id) {
        List<Artist> artistList = artistService.findArtistByPlaylistId(id);
        return new ResponseEntity<>(artistList, HttpStatus.OK) ;
    }
}
