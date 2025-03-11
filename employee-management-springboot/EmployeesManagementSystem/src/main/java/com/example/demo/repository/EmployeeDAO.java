package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Employee;

public interface EmployeeDAO {
	
	Employee save(Employee employee);
    List<Employee> findByEmpName(String empName);
    Optional<Employee> findById(Long id);
    void delete(Long id);

}
