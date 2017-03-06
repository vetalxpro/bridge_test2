import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Department } from '../department.model';
import { MdDialog } from '@angular/material';
import { DepartmentsDeleteConfirmComponent } from '../departments-delete-confirm/departments-delete-confirm.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: [ './departments-list.component.sass' ]
})
export class DepartmentsListComponent implements OnInit {

  @Input() departments: Department[];
  @Output() deleteDepartment: EventEmitter<number>;

  constructor(private dialog: MdDialog,
              private router: Router,) {
    this.deleteDepartment = new EventEmitter();
  }

  ngOnInit() {

  }

  onDelete(id: number): void {
    let dialogRef = this.dialog.open(DepartmentsDeleteConfirmComponent);
    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.deleteDepartment.emit(id);
      }
    });

  }

  showEmployees(department): void {
    this.router.navigate([ 'departments', department.id, 'employees' ]);
  }

}
