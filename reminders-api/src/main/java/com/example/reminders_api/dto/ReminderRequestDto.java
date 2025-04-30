package com.example.reminders_api.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record ReminderRequestDto(
        @NotBlank(message = "Remidner text cannot be blank") String text,
        @NotNull(message = "Reminder date is mandatory") LocalDate remindOn,
        boolean remindMe) {
}
