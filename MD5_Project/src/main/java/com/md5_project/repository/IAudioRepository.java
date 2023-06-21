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
    List<Audio> findAudioByArtistId(Long artistId);

    @Query(value = "select * from audios" +
            "    join artists a on audios.audio_artist = a.id" +
            "    join category_audio ca on audios.id = ca.audio_id" +
            "    where category_id = ?1 and audio_artist = ?2", nativeQuery = true)
    List<Audio> findAudioByArtistIdAndCategoryId(Long categoryId, Long artistId);

    @Query(value = "select audios.id, image, name, path, playCount, status, audio_album, audio_artist from audios" +
            "    join favorites f on audios.id = f.audio_id" +
            "    where user_id = ?1", nativeQuery = true)
    List<Audio> findFavoriteAudio(Long userId);

    @Query(value = "select audios.id, image, name, path, playCount, status, audio_album, audio_artist from audios" +
            "    join favorites f on audios.id = f.audio_id" +
            "    where user_id = ?1", nativeQuery = true)
    Page<Audio> findFavoriteAudioPaging(Long userId, Pageable pageable);
}
