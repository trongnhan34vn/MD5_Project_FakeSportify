package com.md5_project.dto.request;

import com.md5_project.model.Audio;

import java.util.List;

public class PlaylistDTO {
    private String name;
    private Long userId;
    private boolean status;
    private List<Audio> audios;

    public List<Audio> getAudios() {
        return audios;
    }

    public void setAudios(List<Audio> audios) {
        this.audios = audios;
    }

    public PlaylistDTO(String name) {
        this.name = name;
    }

    public PlaylistDTO() {
    }

    public PlaylistDTO(List<Audio> audios) {
        this.audios = audios;
    }

    public PlaylistDTO(String name, Long userId, boolean status) {
        this.name = name;
        this.userId = userId;
        this.status = status;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "PlaylistDTO{" +
                "name='" + name + '\'' +
                ", userId=" + userId +
                ", status=" + status +
                '}';
    }
}
