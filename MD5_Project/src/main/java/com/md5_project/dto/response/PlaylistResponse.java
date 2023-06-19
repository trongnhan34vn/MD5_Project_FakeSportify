package com.md5_project.dto.response;

import com.md5_project.model.Playlist;

import java.util.List;

public class PlaylistResponse {
    private double totalPages;
    private List<Playlist> playlists;

    public PlaylistResponse(double totalPages, List<Playlist> playlists) {
        this.totalPages = totalPages;
        this.playlists = playlists;
    }

    public PlaylistResponse() {
    }

    public double getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(double totalPages) {
        this.totalPages = totalPages;
    }

    public List<Playlist> getPlaylists() {
        return playlists;
    }

    public void setPlaylists(List<Playlist> playlists) {
        this.playlists = playlists;
    }
}
