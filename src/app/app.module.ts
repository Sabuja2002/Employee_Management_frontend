import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import {EmployeeListComponent} from './employee-list/employee-list.component'
import { RouterModule } from '@angular/router';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeListComponent,
    EmployeeUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
