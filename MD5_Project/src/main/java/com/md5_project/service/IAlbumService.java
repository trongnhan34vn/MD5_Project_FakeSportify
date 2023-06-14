package com.md5_project.service;

import com.md5_project.model.Album;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IAlbumService extends IGenericService<Album> {
    List<Album> searchAlbumByName(String search);
    Page<Album> searchAlbumByName(String search, Pageable pageable);
}
