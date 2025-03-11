import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator'; // Import MatPaginator and PageEvent

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = []; // For displaying filtered employees
  searchTerm: string = '';
  selectedDepartment: string = ''; // For dropdown selection
  departments: string[] = ['BPO', 'IT', 'Testing']; // Example departments

  // Pagination variables
  totalItems: number = 0;
  itemsPerPage: number = 5; // Number of items to display per page
  currentPage: number = 0; // Page index starts from 0

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Reference to MatPaginator

  constructor(private employeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllemployee(this.currentPage, this.itemsPerPage).subscribe(
      (page) => {
        this.employees = page.content;
        this.filteredEmployees = this.employees; // Initialize filteredEmployees
        this.totalItems = page.totalElements;
      }
    );
  }

  searchEmployee(): void {
    if (this.searchTerm) {
      this.employeeService.searchEmployees(this.searchTerm, this.currentPage, this.itemsPerPage).subscribe(
        (page) => {
          this.employees = page.content;
          this.filteredEmployees = this.employees; // Update filteredEmployees
          this.totalItems = page.totalElements;
        }
      );
    } else {
      this.loadEmployees();
    }
  }

  filterByDepartment(): void {
    if (this.selectedDepartment) {
      this.filteredEmployees = this.employees.filter(emp => emp.dept === this.selectedDepartment);
    } else {
      this.filteredEmployees = this.employees; // Show all employees if no department is selected
    }
  }

  updateEmployee(id: number): void {
    this.router.navigate(["update-employee", id]);
  }

  deleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(() => {
        this.loadEmployees(); // Refresh the list after deletion
      });
    }
  }

  // Handle page change event
  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex; // Update current page index
    this.itemsPerPage = event.pageSize; // Update items per page
    if (this.searchTerm) {
      this.searchEmployee();
    } else {
      this.loadEmployees();
    }
  }
}