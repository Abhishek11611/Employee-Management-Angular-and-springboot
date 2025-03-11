package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee saveEmployee(Employee employee) {
        if (employee.getEmpCode() == null || employee.getEmpCode().isEmpty()) {
            employee.setEmpCode(generateEmpCode());
        }
        return employeeRepository.save(employee);
    }

    public Page<Employee> getAllEmployees(Pageable pageable) {
        return employeeRepository.findAll(pageable);
    }

    public Page<Employee> searchEmployees(String empName, Pageable pageable) {
        return employeeRepository.findByEmpNameContaining(empName, pageable);
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    public Employee updateEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }

    private String generateEmpCode() {
        Optional<Employee> lastEmployee = employeeRepository.findTopByOrderByEmpCodeDesc();
        if (lastEmployee.isPresent()) {
            String lastCode = lastEmployee.get().getEmpCode();
            int lastNumber = Integer.parseInt(lastCode.substring(3));
            return "EMP" + String.format("%04d", lastNumber + 1);
        } else {
            return "EMP0001";
        }
    }
}