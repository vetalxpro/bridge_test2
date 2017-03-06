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
      .subscribe(newDepartment => {
        if (newDepartment) {
          this.departmentService.addDepartment(newDepartment)
            .subscribe(department => this.departments.push(department));
        }
      });
  }


  onDeleteDepartment(id: number) {
    this.departmentService.deleteDepartment(id)
      .subscribe(res => {
        let index = this.departments.findIndex(dep => dep.id === id);
        if (index > -1) {
          this.departments.splice(index, 1);
        }
      });
  }
}
