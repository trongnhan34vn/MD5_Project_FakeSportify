package com.md5_project.dto.request;

import com.md5_project.model.Audio;

import java.util.Set;

public class PlaylistDTO {
    private Long id;
    private String name;
    private Long userId;
    private boolean status;
    private Set<Audio> audios;
    private String image;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public PlaylistDTO(Long id, String name, Long userId, boolean status, Set<Audio> audios, String imgUrl) {
        this.id = id;
        this.name = name;
        this.userId = userId;
        this.status = status;
        this.audios = audios;
        this.image = imgUrl;
    }

    public Set<Audio> getAudios() {
        return audios;
    }

    public void setAudios(Set<Audio> audios) {
        this.audios = audios;
    }

    public PlaylistDTO(String name) {
        this.name = name;
    }

    public PlaylistDTO() {
    }

    public PlaylistDTO(Long id, String name, Long userId, boolean status, Set<Audio> audios) {
        this.id = id;
        this.name = name;
        this.userId = userId;
        this.status = status;
        this.audios = audios;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PlaylistDTO(Set<Audio> audios) {
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
                "id=" + id +
                ", name='" + name + '\'' +
                ", userId=" + userId +
                ", status=" + status +
                ", audios=" + audios +
                ", image='" + image + '\'' +
                '}';
    }
}
