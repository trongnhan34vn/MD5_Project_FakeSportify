package com.md5_project.service.IMPL;

import com.md5_project.model.Audio;
import com.md5_project.model.Playlist;
import com.md5_project.repository.IPlaylistRepository;
import com.md5_project.service.IAudioService;
import com.md5_project.service.IPlaylistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class PlaylistServiceIMPL implements IPlaylistService {
    @Autowired
    IPlaylistRepository playlistRepository;

    @Autowired
    IAudioService audioService;

    @Override
    public Iterable<Playlist> findAll() {
        return playlistRepository.findAll();
    }

    @Override
    public Playlist save(Playlist playlist) {
        return playlistRepository.save(playlist);
    }

    @Override
    public Optional<Playlist> findById(Long id) {
        return playlistRepository.findById(id);
    }

    @Override
    public List<Playlist> findPlaylistByName(String name) {
        return playlistRepository.findPlaylistByNameContainingIgnoreCaseOrderByNameAsc(name);
    }

    @Override
    public Iterable<Playlist> findPlaylistByUserId(Long userId) {
        return playlistRepository.findPlaylistByUserId(userId);
    }



    @Override
    public Playlist insertAudioToPlaylist(Long playlistId, Long audioId) {
        Optional<Playlist> playlistOptional = findById(playlistId);
        Playlist playlist = playlistOptional.orElseThrow(()-> new RuntimeException("NOT FOUND"));
        Audio audio = audioService.findById(audioId).orElseThrow(()-> new RuntimeException("NOT FOUND"));
        Set<Audio> audioList = playlist.getAudios();
        audioList.add(audio);
        playlist.setAudios(audioList);
        return save(playlist);
    }

    @Override
    public boolean removeAudioFromPlaylist(Long playlistId, Long audioId) {
        Playlist playlist = findById(playlistId).orElseThrow(()-> new RuntimeException("NOT FOUND"));
        Set<Audio> audioList = playlist.getAudios();

        Audio audio = audioService.findById(audioId).orElseThrow(()-> new RuntimeException("NOT FOUND"));
        if (audioList.remove(audio)) {
            playlist.setAudios(audioList);
            save(playlist);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public void remove(Long id) {
        Playlist playlist = findById(id).orElseThrow(()-> new RuntimeException("NOT FOUND"));
        Set<Audio> audioList = playlist.getAudios();
        for (Audio audio: audioList) {
            removeAudioFromPlaylist(id, audio.getId());
        }
        playlistRepository.deleteById(id);
    }

    @Override
    public Page<Playlist> findPlaylistByUserIdPaging(Long userId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return playlistRepository.findPlaylistByUserId(userId, pageable);
    }


}
