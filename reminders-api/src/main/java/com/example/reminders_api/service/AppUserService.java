package com.example.reminders_api.service;

import com.example.reminders_api.model.AppUser;
import com.example.reminders_api.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AppUserService {

    private final AppUserRepository repository;

    public Optional<AppUser> findByUserName(String userName) {
        return repository.findByUserName(userName);
    }

    public AppUser save(AppUser user) {
        return repository.save(user);
    }
}
