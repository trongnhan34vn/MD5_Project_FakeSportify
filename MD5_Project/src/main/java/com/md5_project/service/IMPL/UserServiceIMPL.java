package com.md5_project.service.IMPL;

import com.md5_project.model.Audio;
import com.md5_project.model.User;
import com.md5_project.repository.IAudioRepository;
import com.md5_project.repository.IUserRepository;
import com.md5_project.security.userPrincipal.UserPrinciple;
import com.md5_project.service.IAudioService;
import com.md5_project.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserServiceIMPL implements IUserService {
    @Autowired
    IUserRepository userRepository;

    @Override
    public Iterable<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public void remove(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public Boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }


}
