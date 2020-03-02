import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { dbService } from './services/db.service';
import { oracleComponent } from './components/oracle.component';
import { mysqlComponent } from './components/mysql.component';

@NgModule({
  declarations: [
    AppComponent, oracleComponent, mysqlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [mysqlComponent]
})
export class AppModule { }
