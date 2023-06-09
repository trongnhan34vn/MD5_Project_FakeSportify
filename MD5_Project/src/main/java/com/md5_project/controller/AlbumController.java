package com.md5_project.controller;

import com.md5_project.dto.response.ResponseMessage;
import com.md5_project.model.Album;
import com.md5_project.model.Artist;
import com.md5_project.service.IAlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/album")
public class AlbumController {
    @Autowired
    IAlbumService albumService;
    @GetMapping("/find-all")
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok(albumService.findAll());
    }

    @GetMapping("/find-by-id/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        return ResponseEntity.ok(albumService.findById(id));
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Album album) {
        Album newAlbum = albumService.save(album);
        if (newAlbum == null) {
            return new ResponseEntity<>(new ResponseMessage("Create Failed!"), HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>(new ResponseMessage("Create Success!"), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody Album album) {
        Album newAlbum = albumService.save(album);
        if (newAlbum == null) {
            return new ResponseEntity<>(new ResponseMessage("Update Failed!"), HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>(new ResponseMessage("Create Success!"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try {
            albumService.remove(id);
            return new ResponseEntity<>(new ResponseMessage("Remove Success!"), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(new ResponseMessage("Remove Failed!"),  HttpStatus.NOT_ACCEPTABLE);
        }
    }
    @GetMapping("/search/{search}")
    public ResponseEntity<?> searchByName (@PathVariable String search) {
        List<Album> listSearch = albumService.searchAlbumByName(search);
        return new ResponseEntity<>(listSearch, HttpStatus.OK);
    }

    @GetMapping("/searchPaging")
    public ResponseEntity<?> searchPaging(@RequestParam String search, Pageable pageable) {
        pageable = PageRequest.of(pageable.getPageNumber(), 4);
        Page<Album> page = albumService.searchAlbumByName(search, pageable);
        List<Album> audioList = page.getContent();
        return new ResponseEntity<>(audioList, HttpStatus.OK) ;
    }
}
