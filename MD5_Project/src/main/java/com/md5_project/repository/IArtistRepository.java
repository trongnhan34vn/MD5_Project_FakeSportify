package com.md5_project.repository;

import com.md5_project.model.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IArtistRepository extends JpaRepository<Artist,Long> {
    @Query("SELECT a FROM Artist AS a WHERE a.name LIKE CONCAT('%', upper(?1), '%')")
    List<Artist> searchArtistByName(String search);
}
