package com.md5_project.repository;

import com.md5_project.model.Artist;
import com.md5_project.model.Audio;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IArtistRepository extends JpaRepository<Artist,Long> {
    @Query("SELECT a FROM Artist AS a WHERE a.name LIKE CONCAT('%', upper(?1), '%')")
    List<Artist> searchArtistByName(String search);
    Page<Artist> findArtistByNameContainingIgnoreCase(String search, Pageable pageable);
    @Query(value = "select distinct a2.id, a2.image, a2.name, a2.status from category c" +
            "    join category_audio ca on c.id = ca.category_id" +
            "    join audios a on a.id = ca.audio_id" +
            "    join artists a2 on a2.id = a.audio_artist" +
            "    WHERE c.id = ?1", nativeQuery = true)
    Page<Artist> findArtistByCategory(Long categoryId, Pageable pageable);
    @Query (value = "select distinct artists.id, artists.image, artists.name, artists.status from artists" +
            "    join audios a on artists.id = a.audio_artist" +
            "    join playlist_audio pa on a.id = pa.audio_id" +
            "    where playlist_id = ?1", nativeQuery = true)
    List<Artist> findArtistByPlaylistId(Long playlistId);
}
