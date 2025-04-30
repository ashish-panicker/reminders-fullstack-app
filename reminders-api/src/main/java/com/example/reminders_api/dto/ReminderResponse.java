package com.example.reminders_api.dto;

import org.springframework.http.HttpStatus;

public record ReminderResponse(HttpStatus status, Object payload) {
}
