import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  BASIC_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.BASIC_URL}/add/employee`, employee);
  }

  public getEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.BASIC_URL}/get/employee`);
  }

  public deleteEmplyee(employeeId: number){
    return this.httpClient.delete(`${this.BASIC_URL}/remove/employee/${employeeId}`);
  }

  public getEmployeeById(employeeId: number) {
    return this.httpClient.get<Employee>(`${this.BASIC_URL}/get/employee/${employeeId}`)
  }

  public updateEmployee(employee: Employee){
    return this.httpClient.put<Employee>(`${this.BASIC_URL}/update/employee`, employee)
  }
}
