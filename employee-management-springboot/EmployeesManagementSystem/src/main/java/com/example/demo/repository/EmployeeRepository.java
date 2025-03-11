package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    List<Employee> findByEmpNameContaining(String empName);
    Optional<Employee> findTopByOrderByEmpCodeDesc();
    Page<Employee> findByEmpNameContaining(String empName, Pageable pageable); //  this method for pagination
}