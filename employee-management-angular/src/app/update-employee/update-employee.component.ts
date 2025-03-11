import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

constructor(private activeRouter : ActivatedRoute,
  private employeeService : EmployeeServiceService,
  private router: Router){}
id !: number;
employee: Employee =new  Employee(); 
ngOnInit(): void {
  this.id=this.activeRouter.snapshot.params['id'];
  console.log(this.id);
  this.employeeService.getEmployeeById(this.id).subscribe(data=>{
    this.employee=data;
    console.log(this.employee);
    
  })
  
}
updateEmployeeData(){
this.employeeService.updateEmployeeData(this.employee).subscribe(data=>{
  alert("Updated Successfully");
  this.router.navigate(['/employees']);
},error=>alert("Sorry Unable to Update"))
}

}
