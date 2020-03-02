import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn : "root"
})

export class employeesService {

  constructor(private obj:HttpClient) { }

  public getEmployees():Observable<any> {
    return this.obj.get("https://www.w3schools.com/angular/customers.php");
  } 
}  
 