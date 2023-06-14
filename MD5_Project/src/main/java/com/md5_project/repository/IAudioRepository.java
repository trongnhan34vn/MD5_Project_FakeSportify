package com.md5_project.repository;

import com.md5_project.model.Artist;
import com.md5_project.model.Audio;
import com.md5_project.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IAudioRepository extends JpaRepository<Audio,Long> {
    @Query("SELECT a FROM Audio AS a WHERE a.name LIKE CONCAT('%', upper(?1), '%')")
    List<Audio> searchAudioByName(String search);
    Page<Audio> findAudioByNameContainingIgnoreCase(String search, Pageable pageable);
    @Query(value = "select * from audios as a" +
            "    join artists a2 on a2.id = a.audio_artist" +
            "    join category_audio ca on a.id = ca.audio_id" +
            "    where a2.id = ?1 and ca.category_id = ?2", nativeQuery = true)
    List<Audio> findAudioByCategoryAndArtist(Long categoryId, Long artistId);

}
