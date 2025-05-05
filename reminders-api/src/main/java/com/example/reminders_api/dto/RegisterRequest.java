package com.example.reminders_api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record RegisterRequest(
        @NotBlank(message = "Username cannot bre blank") String userName,
        @Email(message = "Provide a valid email") @NotBlank(message = "Email cannot be blank") String email,
        @NotBlank(message = "Provide a valid password")
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-mm-yyyy") String password) {
}
