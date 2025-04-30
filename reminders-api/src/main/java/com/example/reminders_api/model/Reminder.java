package com.example.reminders_api.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.LocalDate;

@Document("reminders")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Reminder {

    @MongoId
    private String id;

    private String text;

    private String userName;

    private LocalDate remindOn;

    private boolean remindMe;

    private Status status;
}
