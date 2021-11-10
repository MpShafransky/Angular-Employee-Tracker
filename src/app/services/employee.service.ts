import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Employee } from '../Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:5000/employees';

  constructor(private http:HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  deleteEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.apiUrl}/${employee.id}`;
    return this.http.delete<Employee>(url);
  }
}

// links the database through a API url. Once linked, the url(database) is referenced the developer can then access the employee id for GET and DELETE requests.