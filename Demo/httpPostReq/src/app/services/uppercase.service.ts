import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
 
export class UppercaseService {
  constructor(private http:HttpClient) { }
  //convertToUpperCase() is the custom function
  //argument is obj
  //obj is JSON Object
  //obj coming from Component
  //send the obj to Server.
  public convertToUpperCase(obj:any):Observable<any>{
      return this.http.post("http://test-routes.herokuapp.com/test/uppercase",obj);
  };
}
 