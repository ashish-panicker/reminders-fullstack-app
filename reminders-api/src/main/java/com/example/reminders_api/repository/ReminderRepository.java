package com.example.reminders_api.repository;

import com.example.reminders_api.model.Reminder;
import com.example.reminders_api.model.Status;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ReminderRepository extends MongoRepository<Reminder, String> {

    List<Reminder> findAllByUserName(String userName);

    List<Reminder> findAllByStatus(Status status);
}
