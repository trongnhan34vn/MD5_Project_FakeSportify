package com.md5_project.service.IMPL;

import com.md5_project.model.Artist;
import com.md5_project.repository.IArtistRepository;
import com.md5_project.service.IArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class ArtistServiceIMPL implements IArtistService {
    @Autowired
    IArtistRepository artistRepository;
    @Override
    public Iterable<Artist> findAll() {
        return artistRepository.findAll();
    }

    @Override
    public Artist save(Artist artist) {
        return artistRepository.save(artist);
    }

    @Override
    public Optional<Artist> findById(Long id) {
        return artistRepository.findById(id);
    }

    @Override
    public void remove(Long id) {
        artistRepository.deleteById(id);
    }
}
