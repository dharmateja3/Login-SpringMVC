package com.spring.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.login.entity.Login;
import com.spring.login.repository.LoginRepository;

import java.util.Optional;

@Service
public class LoginService {
    @Autowired
    private LoginRepository loginRepository;

    public Optional<Login> findByEmail(String email) {
        return loginRepository.findByEmail(email);
    }

    public Login saveLogin(String email, String password) {
        Login login = new Login();
        login.setEmail(email);
        login.setPassword(password);
        return loginRepository.save(login);
    }
}