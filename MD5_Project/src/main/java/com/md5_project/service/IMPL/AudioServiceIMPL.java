package com.md5_project.service.IMPL;

import com.md5_project.model.Audio;
import com.md5_project.repository.IAudioRepository;
import com.md5_project.service.IAudioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class AudioServiceIMPL implements IAudioService {
    @Autowired
    IAudioRepository audioRepository;
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
}
