import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { Page } from 'src/app/models/page'; // Create a Page model to match the backend response

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  baseURL = "http://localhost:8080/api/employees";

  constructor(private httpClient: HttpClient) { }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.baseURL}/register`, employee);
  }

  getAllemployee(page: number, size: number): Observable<Page<Employee>> {
    return this.httpClient.get<Page<Employee>>(`${this.baseURL}/all?page=${page}&size=${size}`);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployeeData(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.baseURL}/update`, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/delete/${id}`);
  }

  searchEmployees(name: string, page: number, size: number): Observable<Page<Employee>> {
    return this.httpClient.get<Page<Employee>>(`${this.baseURL}/search?name=${name}&page=${page}&size=${size}`);
  }
}