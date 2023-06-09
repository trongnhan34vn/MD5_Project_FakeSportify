package com.md5_project.repository;

import com.md5_project.model.Audio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAudioRepository extends JpaRepository<Audio,Long> {
}
