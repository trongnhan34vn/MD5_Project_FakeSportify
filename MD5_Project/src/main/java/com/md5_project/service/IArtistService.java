package com.md5_project.service;

import com.md5_project.model.Artist;

import java.util.List;

public interface IArtistService extends IGenericService<Artist> {
    List<Artist> searchArtistByName(String name);
}
