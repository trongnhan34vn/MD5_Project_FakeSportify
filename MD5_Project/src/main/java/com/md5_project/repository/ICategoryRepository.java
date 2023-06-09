package com.md5_project.repository;

import com.md5_project.model.Category;
import com.md5_project.service.IGenericService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryRepository extends JpaRepository<Category, Long> {
}
