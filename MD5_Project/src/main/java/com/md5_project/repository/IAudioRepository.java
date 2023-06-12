package com.md5_project.repository;

import com.md5_project.model.Audio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IAudioRepository extends JpaRepository<Audio,Long> {
    @Query("SELECT a FROM Audio AS a WHERE a.name LIKE CONCAT('%', upper(?1), '%')")
    List<Audio> searchAudioByName(String search);
}
