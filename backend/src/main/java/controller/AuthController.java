package com.travel.backend.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@RestController
public class AuthController {

    // 👇 ADD THIS SECTION (Fixes the 404 Error on Home Page)
    @GetMapping("/")
    public String home() {
        return "✅ Backend is Running Successfully!";
    }

    @GetMapping("/user")
    public Map<String, Object> user(@AuthenticationPrincipal OAuth2User principal) {
        if (principal == null) {
            return Collections.singletonMap("name", null);
        }
        return principal.getAttributes();
    }
}