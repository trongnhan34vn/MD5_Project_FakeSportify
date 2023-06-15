package com.md5_project.service;

import com.md5_project.model.Artist;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IArtistService extends IGenericService<Artist> {
    List<Artist> searchArtistByName(String name);
    Page<Artist> searchArtistByName(String name, Pageable pageable);
    Page<Artist> searchArtistByCategory(Long categoryId, Pageable pageable);

}
