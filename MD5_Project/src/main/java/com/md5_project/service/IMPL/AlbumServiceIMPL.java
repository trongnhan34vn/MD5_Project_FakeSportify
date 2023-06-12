package com.md5_project.service.IMPL;

import com.md5_project.model.Album;
import com.md5_project.repository.IAlbumRepository;
import com.md5_project.service.IAlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class AlbumServiceIMPL implements IAlbumService {
    @Autowired
    IAlbumRepository albumRepository;
    @Override
    public Iterable<Album> findAll() {
        return albumRepository.findAll();
    }

    @Override
    public Album save(Album album) {
        return albumRepository.save(album);
    }

    @Override
    public Optional<Album> findById(Long id) {
        return albumRepository.findById(id);
    }

    @Override
    public void remove(Long id) {
        albumRepository.deleteById(id);
    }

    @Override
    public List<Album> searchAlbumByName(String search) {
        return albumRepository.searchAlbumByName(search);
    }
}
