import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { employeesComponent } from './components/emp.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, employeesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [], 
  bootstrap: [employeesComponent]
})
export class AppModule { } 
