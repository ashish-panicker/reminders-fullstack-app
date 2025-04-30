package com.example.reminders_api.security.repo;

import com.example.reminders_api.security.model.AppUser;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface AppUserRepository extends MongoRepository<AppUser, String> {

    Optional<AppUser> findByUserName(String userName);
}
