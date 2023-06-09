package com.md5_project.controller;

import com.md5_project.dto.request.SignInForm;
import com.md5_project.dto.request.SignUpForm;
import com.md5_project.dto.response.JwtResponse;
import com.md5_project.dto.response.ResponseMessage;
import com.md5_project.model.Role;
import com.md5_project.model.RoleName;
import com.md5_project.model.User;
import com.md5_project.security.jwt.JwtProvider;
import com.md5_project.security.userPrincipal.UserPrinciple;
import com.md5_project.service.IRoleService;
import com.md5_project.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {
    @Autowired
    IUserService userService;

    @Autowired
    IRoleService roleService;

    @Autowired
    JwtProvider jwtProvider;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public ResponseEntity<?> register(@Valid @RequestBody SignUpForm signUpForm) {
        if(userService.existsByEmail(signUpForm.getEmail())) {
            return ResponseEntity.badRequest().body(new ResponseMessage("Email is already exist!"));
        }
        User user = new User();
        user.setEmail(signUpForm.getEmail());
        user.setPassword(passwordEncoder.encode(signUpForm.getPassword()));
        user.setGender(signUpForm.isGender());
        user.setBirthDate(signUpForm.getBirthDate());
        user.setFullName(signUpForm.getFullName());
        user.setStatus(true);
        Set<String> strRole =  signUpForm.getRoles();
        Set<Role> roles = new HashSet<>();
        if (strRole == null) {
            Role role = roleService.findByName(RoleName.USER).orElseThrow(()-> new RuntimeException("Role Not Found!"));
            roles.add(role);
        } else {
            strRole.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleService.findByName(RoleName.ADMIN).orElseThrow(()-> new RuntimeException("Role Not Found!"));
                        roles.add(adminRole);
                    case "pm":
                        Role pmRole = roleService.findByName(RoleName.PM).orElseThrow(()-> new RuntimeException("Role Not Found!"));
                        roles.add(pmRole);
                    case "user":
                        Role userRole = roleService.findByName(RoleName.USER).orElseThrow(()-> new RuntimeException("Role Not Found!"));
                        roles.add(userRole);
                }
            });
        }
        user.setRoles(roles);
        userService.save(user);
        return ResponseEntity.ok(new ResponseMessage("Create Success!"));
    }


    @PostMapping("/signin")
    public ResponseEntity<?> login(@Valid @RequestBody SignInForm signInForm, HttpServletResponse response) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signInForm.getEmail(), signInForm.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateJwtToken(authentication);
        UserPrinciple userDetails = (UserPrinciple) authentication.getPrincipal();
        JwtResponse jwtResponse = new JwtResponse(jwt, userDetails.getUsername(), userDetails.getFullName(), userDetails.getAuthorities());

        Cookie cookie = new Cookie("jwtToken", jwt);
        cookie.setMaxAge(24 * 60 * 60); // expires in 1 day
        cookie.setSecure(false);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        response.addCookie(cookie);
        return ResponseEntity.ok().body(jwtResponse);
    }
}

