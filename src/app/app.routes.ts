import { Routes } from '@angular/router';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentEmployeesComponent } from './components/departments/department-employees/department-employees.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'departments' },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'departments/:id/employees', component: DepartmentEmployeesComponent }
];
