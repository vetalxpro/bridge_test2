import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsService } from '../departments.service';
import { User } from '../user.model';
import { MdDialog } from '@angular/material';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { Department } from 'app/components/departments/department.model';

@Component({
  selector: 'app-department-employees',
  templateUrl: './department-employees.component.html',
  styleUrls: [ './department-employees.component.sass' ],
})
export class DepartmentEmployeesComponent implements OnInit {
  users: User[]      = [];
  isLoading: boolean = true;
  id: number;
  department: Department;

  constructor(private location: Location,
              private activatedRoute: ActivatedRoute,
              private departmentService: DepartmentsService,
              private dialog: MdDialog) {
    this.activatedRoute.params.subscribe(params => this.id = +params[ 'id' ]);

  }

  ngOnInit(): void {

    this.departmentService.getDepartmentUsers(this.id)
      .subscribe(users => {
        this.department = this.departmentService.selectedDepartment;
        this.isLoading  = false;
        if (users.length) {
          this.users = users;
        }
      });
  }

  back(): void {
    this.location.back();
  }

  showForm() {
    let dialogRef = this.dialog.open(EmployeeFormComponent);
    dialogRef.afterClosed()
      .subscribe(employee => {
        if (employee) {
          employee.departmentId = this.id;
          this.departmentService.addEmployee(employee)
            .subscribe(employee => {
              this.users.push(employee);
            })
        }
      });
  }

  onRemoveUser(id) {
    this.departmentService.removeEmployee(id)
      .subscribe(res => {
        const index = this.users.findIndex(user => user.id === id);
        if (index > -1) {
          this.users.splice(index, 1);
        }
      });
  }

}
