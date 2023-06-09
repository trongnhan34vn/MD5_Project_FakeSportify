package com.md5_project.repository;

import com.md5_project.model.Audio;
import com.md5_project.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<User,Long> {
    Boolean existsByEmail(String email);
    Optional<User> findByEmail(String email);


}
