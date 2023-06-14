package com.md5_project.service;

import com.md5_project.model.Audio;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IAudioService extends IGenericService<Audio> {
    List<Audio> searchAudioByName(String search);
    Page<Audio> searchAudioByName(String search, Pageable pageable);
}
