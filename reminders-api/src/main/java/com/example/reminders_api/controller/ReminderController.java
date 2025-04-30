package com.example.reminders_api.controller;

import com.example.reminders_api.dto.ReminderRequestDto;
import com.example.reminders_api.dto.ReminderResponse;
import com.example.reminders_api.model.Reminder;
import com.example.reminders_api.model.Status;
import com.example.reminders_api.security.model.CustomUserDetails;
import com.example.reminders_api.service.ReminderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reminders")
@RequiredArgsConstructor
public class ReminderController {

    private final ReminderService service;

    // GET /api/reminders?userName=
    @GetMapping("/u")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<ReminderResponse> getAllRemindersByUser(@AuthenticationPrincipal CustomUserDetails auth) {
        var reminders = service.findAllByUserName(auth.getUsername());
        if (reminders.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .body(new ReminderResponse(HttpStatus.NO_CONTENT, reminders));
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ReminderResponse(HttpStatus.OK, reminders));
    }

    // GET /api/reminders?status=....
    @GetMapping("/s")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<ReminderResponse> getAllRemindersByUser(@RequestParam Status status) {
        var reminders = service.findAllByStatus(status);
        if (reminders.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .body(new ReminderResponse(HttpStatus.NO_CONTENT, reminders));
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ReminderResponse(HttpStatus.OK, reminders));
    }


    @PostMapping
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<ReminderResponse> createReminder(@Valid @RequestBody ReminderRequestDto request, Authentication auth) {
        var reminder = Reminder.builder()
                .text(request.text()).remindOn(request.remindOn())
                .remindMe(request.remindMe()).status(Status.PENDING).userName(auth.getName())
                .build();
        reminder = service.save(reminder);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new ReminderResponse(HttpStatus.CREATED, reminder));
    }

}
