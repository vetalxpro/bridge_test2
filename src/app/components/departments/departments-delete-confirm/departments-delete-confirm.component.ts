import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-departments-delete-confirm',
  templateUrl: './departments-delete-confirm.component.html',
  styleUrls: [ './departments-delete-confirm.component.sass' ]
})
export class DepartmentsDeleteConfirmComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<DepartmentsDeleteConfirmComponent>) {
  }

  ngOnInit(): void {
  }

  onDelete() {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}
