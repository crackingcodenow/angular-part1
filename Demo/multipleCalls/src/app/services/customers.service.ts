import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http:HttpClient) { }

  public getCustomers():Observable<any> {
    return this.http.get("https://www.w3schools.com/angular/customers.php");
  }
}
