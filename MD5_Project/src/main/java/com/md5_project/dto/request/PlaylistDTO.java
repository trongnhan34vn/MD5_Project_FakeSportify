package com.md5_project.dto.request;

public class PlaylistDTO {
    private String name;

    public PlaylistDTO(String name) {
        this.name = name;
    }

    public PlaylistDTO() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
