import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CustomerComponent } from './employee/employee.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';

const routes: Routes = [
  {path: 'employee-list', component: EmployeeListComponent},
      {
        path:'',component:CustomerComponent
      },
      {
        path:"emp-update/:id",component:EmployeeUpdateComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
