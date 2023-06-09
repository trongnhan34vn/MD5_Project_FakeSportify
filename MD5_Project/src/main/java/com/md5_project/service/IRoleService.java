package com.md5_project.service;

import com.md5_project.model.Role;
import com.md5_project.model.RoleName;

import java.util.Optional;

public interface IRoleService extends IGenericService<Role> {
    Optional<Role> findByName(RoleName name);
}
