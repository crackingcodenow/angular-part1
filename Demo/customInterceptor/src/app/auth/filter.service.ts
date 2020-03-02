import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable ({
  providedIn:'root'
})

export class filterService {
  intercept (req:HttpRequest<any>, handler:HttpHandler):Observable<HttpEvent<any>> {
    const req1 = req.clone({
      setHeaders: {
        token : "nareshit"
      }
    });
    return handler.handle(req1);
  }
} 