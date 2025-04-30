package com.example.reminders_api.service;

import com.example.reminders_api.model.Reminder;
import com.example.reminders_api.model.Status;
import com.example.reminders_api.repository.ReminderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReminderServiceImpl implements ReminderService {

    private final ReminderRepository repository;

    @Override
    public List<Reminder> findAllByUserName(String userName) {
        return repository.findAllByUserName(userName);
    }

    @Override
    public Reminder save(Reminder reminder) {
        return repository.save(reminder);
    }

    @Override
    public List<Reminder> findAllByStatus(Status status) {
        return repository.findAllByStatus(status);
    }
}
