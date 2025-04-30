package com.example.reminders_api.service;

import com.example.reminders_api.model.Reminder;
import com.example.reminders_api.model.Status;

import java.util.List;

public interface ReminderService {

    List<Reminder> findAllByUserName(String userName);

    Reminder save(Reminder reminder);

    List<Reminder> findAllByStatus(Status status);
}
