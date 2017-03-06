import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Department } from './department.model';
import { User } from './user.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class DepartmentsService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  public selectedDepartment: Department;

  constructor(private http: Http) {
  }

  getAllDepartments(): Observable<Department[]> {
    return this.http.get('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments')
      .map(departments => departments.json());
  }

  getDepartmentUsers(id: number): Observable<User[]> {
    return this.http.get('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees', { headers: this.headers })
      .map(users => users.json())
      .map(users => users.filter(user => user.departmentId === id));

  }

  addDepartment(newDepartment: Department): Observable<any> {
    return this.http.post('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments', newDepartment, { headers: this.headers })
      .map(res => res.json());

  }

  deleteDepartment(id: number): Observable<any> {
    return this.http.delete(`http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/${id}`, { headers: this.headers })
      .map(res => res.json());
  }

  addEmployee(employee): Observable<any> {
    return this.http.post(`http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees`, employee, { headers: this.headers })
      .map(res => res.json());
  }
}
