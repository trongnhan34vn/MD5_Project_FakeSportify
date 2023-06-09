package com.md5_project.service;

import java.util.Optional;

public interface IGenericService<E> {
    Iterable<E> findAll();
    E save(E e);
    Optional<E> findById(Long id);
    void remove(Long id);
}
