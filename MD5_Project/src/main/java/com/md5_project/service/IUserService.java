package com.md5_project.service;

import com.md5_project.model.User;

import java.util.Optional;

public interface IUserService extends IGenericService<User> {
    Boolean existsByEmail(String email);
    Optional<User> findByEmail(String email);
}
