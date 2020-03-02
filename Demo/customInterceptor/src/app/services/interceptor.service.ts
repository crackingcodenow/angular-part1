 
 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
 
 @Injectable({
   providedIn: 'root'
 })
 export class InterceptorService {
   constructor(private http:HttpClient) { }
   public authenticate():Observable<any>{
     return this.http.get("http://localhost:8080/demo");
   }
 }
  