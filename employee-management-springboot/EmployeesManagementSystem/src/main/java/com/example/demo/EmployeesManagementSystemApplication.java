package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.example.demo")
public class EmployeesManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeesManagementSystemApplication.class, args);
	}

}
