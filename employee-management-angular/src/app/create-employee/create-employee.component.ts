import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();

  constructor(private employeeService: EmployeeServiceService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  addEmployeeData(){
    this.employeeService.addEmployee(this.employee).subscribe(data=>{
      alert("Employee Data Insert Successfully");
      this.gotoListofemployeepage();
    },error=>alert("Sorry Unable to insert Employee Data"))  
  }

  gotoListofemployeepage(){
      this.router.navigate(['/employees']);
  }

}
