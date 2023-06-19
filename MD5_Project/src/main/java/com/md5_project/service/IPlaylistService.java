package com.md5_project.service;

import com.md5_project.model.Audio;
import com.md5_project.model.Playlist;
import org.springframework.data.domain.Page;

import java.util.List;

public interface IPlaylistService extends IGenericService<Playlist> {
    List<Playlist> findPlaylistByName(String name);
    Iterable<Playlist> findPlaylistByUserId(Long userId);
    Playlist insertAudioToPlaylist(Long playlistId, Long audioId);
    boolean removeAudioFromPlaylist(Long playlistId, Long audioId);
    Page<Playlist> findPlaylistByUserIdPaging(Long userId, int page, int size);

}
