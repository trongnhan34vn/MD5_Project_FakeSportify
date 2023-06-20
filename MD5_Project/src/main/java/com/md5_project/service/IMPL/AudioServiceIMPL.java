package com.md5_project.service.IMPL;

import com.md5_project.dto.response.ResponseMessage;
import com.md5_project.model.Artist;
import com.md5_project.model.Audio;
import com.md5_project.model.User;
import com.md5_project.repository.IAudioRepository;
import com.md5_project.security.userPrincipal.UserPrinciple;
import com.md5_project.service.IArtistService;
import com.md5_project.service.IAudioService;
import com.md5_project.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class AudioServiceIMPL implements IAudioService {
    @Autowired
    IAudioRepository audioRepository;

    @Autowired
    IUserService userService;

    @Override
    public Iterable<Audio> findAll() {
        return audioRepository.findAll();
    }

    @Override
    public Audio save(Audio audio) {
        return audioRepository.save(audio);
    }

    @Override
    public Optional<Audio> findById(Long id) {
        return audioRepository.findById(id);
    }

    @Override
    public void remove(Long id) {
        audioRepository.deleteById(id);
    }

    @Override
    public List<Audio> searchAudioByName(String search) {
        return audioRepository.searchAudioByName(search);
    }

    @Override
    public Page<Audio> searchAudioByName(String search, Pageable pageable) {
        return audioRepository.findAudioByNameContainingIgnoreCase(search, pageable);
    }

    @Override
    public List<Audio> findAudioByCategoryAndArtist(Long categoryId, Long artistId) {
        return audioRepository.findAudioByCategoryAndArtist(categoryId, artistId);
    }

    @Override
    public List<Audio> findAudioByArtistIdAndCategoryId(Long categoryId, Long artistId) {
        return audioRepository.findAudioByArtistIdAndCategoryId(categoryId, artistId);
    }

    @Override
    public List<Audio> findAudioByArtistId(Long artistId) {
        return audioRepository.findAudioByArtistId(artistId);
    }

    @Override
    public List<Audio> findFavoriteAudios() {
        UserPrinciple userPrinciple = (UserPrinciple) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return audioRepository.findFavoriteAudio(userPrinciple.getId());
    }

    @Override
    public void likeAudio(Long audioId) {
        UserPrinciple userPrinciple = (UserPrinciple) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userService.findById(userPrinciple.getId()).orElseThrow(() -> new RuntimeException("User Not Found!"));
        Set<Audio> audioSet = user.getFavorites();
        Audio audio = findById(audioId).orElseThrow(() -> new RuntimeException("Audio Not Found!"));
        boolean isExist = audioSet.contains(audio);
        if (!isExist) {
            audioSet.add(audio);
        } else {
            audioSet.remove(audio);
        }
        user.setFavorites(audioSet);
        userService.save(user);
    }
}
