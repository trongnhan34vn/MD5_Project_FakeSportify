package com.md5_project.repository;

import com.md5_project.model.Playlist;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPlaylistRepository extends JpaRepository<Playlist, Long> {
    List<Playlist> findPlaylistByNameContainingIgnoreCase(String name);
    Iterable<Playlist> findPlaylistByUserId(Long userId);
    Page<Playlist> findPlaylistByUserId(Long userId, Pageable pageable);
}
