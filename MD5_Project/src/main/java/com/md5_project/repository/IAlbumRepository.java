package com.md5_project.repository;

import com.md5_project.model.Album;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IAlbumRepository extends JpaRepository<Album, Long> {
    @Query("SELECT a FROM Album AS a WHERE a.name LIKE CONCAT('%', upper(?1), '%')")
    List<Album> searchAlbumByName(String search);
}
