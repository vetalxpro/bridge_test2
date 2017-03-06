import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from './departments.service';
import { MdDialog } from '@angular/material';
import { Department } from './department.model';
import { DepartmentsFormComponent } from './departments-form/departments-form.component';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: [ './departments.component.sass' ],
})
export class DepartmentsComponent implements OnInit {
  departments: Department[];

  constructor(private departmentService: DepartmentsService,
              private dialog: MdDialog) {
  }

  ngOnInit() {
    this.departmentService.getAllDepartments()
      .subscribe(departments => this.departments = departments);
  }

  openForm() {
    let dialogRef = this.dialog.open(DepartmentsFormComponent);
    dialogRef.afterClosed()
      .switchMap(newDepartment => this.departmentService.addDepartment(newDepartment))
      .subscribe(department => this.departments.push(department));
  }


  onDeleteDepartment(id: number) {
    this.departmentService.deleteDepartment(id)
      .subscribe(res => {
        this.departments = this.departments.filter(department => department.id !== id);
      });
  }
}
