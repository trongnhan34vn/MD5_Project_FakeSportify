package com.md5_project.service;

import com.md5_project.model.Audio;

import java.util.List;

public interface IAudioService extends IGenericService<Audio> {
    List<Audio> searchAudioByName(String search);
}
