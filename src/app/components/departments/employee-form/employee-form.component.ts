import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { User } from 'app/components/departments/user.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: [ './employee-form.component.sass' ]
})
export class EmployeeFormComponent implements OnInit {
  firstName: string;
  lastName: string;
  phone: string;
  salary: number;

  constructor(public dialogRef: MdDialogRef<EmployeeFormComponent>) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    const employee = new User(
      this.firstName,
      this.lastName,
      this.phone,
      this.salary
    );
    this.dialogRef.close(employee);
  }
}
