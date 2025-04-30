package com.example.reminders_api.repository;

import com.example.reminders_api.model.AppUser;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface AppUserRepository extends MongoRepository<AppUser, String> {

    Optional<AppUser> findByUserName(String userName);
}
