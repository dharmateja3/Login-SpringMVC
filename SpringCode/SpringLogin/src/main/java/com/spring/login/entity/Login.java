package com.spring.login.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "login")
public class Login {
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
     @Column
	 private String email;
     @Column
	 private String password;
     public Login() {
    	 
     }
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Login(Long id, String email, String password) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
	}
	@Override
	public String toString() {
		return "Login [id=" + id + ", email=" + email + ", password=" + password + "]";
	}
     
}
