import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DepartmentsListComponent } from './components/departments/departments-list/departments-list.component';
import { DepartmentsFormComponent } from './components/departments/departments-form/departments-form.component';
import 'hammerjs';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentEmployeesComponent } from './components/departments/department-employees/department-employees.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { DepartmentsService } from './components/departments/departments.service';
import { DepartmentsDeleteConfirmComponent } from './components/departments/departments-delete-confirm/departments-delete-confirm.component';
import { EmployeeFormComponent } from './components/departments/employee-form/employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsListComponent,
    DepartmentsFormComponent,
    DepartmentsComponent,
    DepartmentEmployeesComponent,
    DepartmentsDeleteConfirmComponent,
    EmployeeFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ DepartmentsService ],
  bootstrap: [ AppComponent ],
  entryComponents: [
    DepartmentsFormComponent,
    DepartmentsDeleteConfirmComponent,
    EmployeeFormComponent
  ]
})

export class AppModule {
}
