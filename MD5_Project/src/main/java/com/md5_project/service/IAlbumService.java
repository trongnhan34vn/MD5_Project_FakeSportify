package com.md5_project.service;

import com.md5_project.model.Album;

import java.util.List;

public interface IAlbumService extends IGenericService<Album> {
    List<Album> searchAlbumByName(String search);
}
