package com.example.reminders_api.repository;

import com.example.reminders_api.model.AppUser;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface AppUserRepository extends MongoRepository<AppUser, String> {

    Optional<AppUser> findByUserName(String userName);

    Optional<AppUser> findByUserNameOrEmail(@NotBlank(message = "Value cannot be blank")
                                            String userName,
                                            @Email(message = "Provide a valid email")
                                            @NotBlank(message = "Email cannot be blank")
                                            String email);
}
