package com.md5_project.dto.request;

public class PlaylistDTO {
    private String name;
    private Long userId;
    private boolean status;

    public PlaylistDTO(String name) {
        this.name = name;
    }

    public PlaylistDTO() {
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
