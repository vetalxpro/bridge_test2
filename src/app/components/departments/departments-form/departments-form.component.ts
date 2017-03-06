import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Department } from '../department.model';

@Component({
  selector: 'app-departments-form',
  templateUrl: './departments-form.component.html',
  styleUrls: [ './departments-form.component.sass' ],
})
export class DepartmentsFormComponent implements OnInit {
  name: string;
  description: string;

  constructor(public dialogRef: MdDialogRef<DepartmentsFormComponent>) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    let newDepartment = new Department(this.name, this.description);
    this.dialogRef.close(newDepartment);
  }

}
