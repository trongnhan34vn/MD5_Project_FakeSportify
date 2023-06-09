package com.md5_project.dto.request;

import java.time.LocalDate;
import java.util.Date;
import java.util.Set;

public class SignUpForm {
    private String fullName;
    private String email;
    private String password;
    private boolean gender;
    private LocalDate birthDate;
    private Set<String> roles;

    public SignUpForm(String fullName, String email, String image, String password, boolean gender, LocalDate birthDate, Set<String> roles) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.birthDate = birthDate;
        this.roles = roles;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }

    public SignUpForm() {
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }
}
