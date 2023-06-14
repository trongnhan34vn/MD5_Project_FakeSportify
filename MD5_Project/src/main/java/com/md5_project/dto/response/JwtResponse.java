package com.md5_project.dto.response;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class JwtResponse {
    private Long id;
    private String token;
    private String type = "Bearer";
    private String fullName;
    private String email;
    private Collection<? extends GrantedAuthority> roles;

    public JwtResponse(Long id,String token, String fullName, String email, Collection<? extends GrantedAuthority> roles) {
        this.id = id;
        this.token = token;
        this.fullName = fullName;
        this.email = email;
        this.roles = roles;
    }

    public JwtResponse() {
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
