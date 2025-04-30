package com.example.reminders_api.security.dto;

public record RegisterRequest(String userName, String email, String password) {
}
