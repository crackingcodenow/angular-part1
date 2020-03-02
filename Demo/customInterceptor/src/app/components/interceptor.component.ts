  
  import { Component, OnInit } from '@angular/core';
  import { InterceptorService } from '../services/interceptor.service';
  import { HttpErrorResponse } from '@angular/common/http';
  
  @Component({
    selector: 'interceptor',
    templateUrl: './interceptor.component.html',
    styles: []
  })
  export class InterceptorComponent {
    private result:any;
    constructor(private service:InterceptorService) { }
  
    ngOnInit() {
      this.service.authenticate().subscribe((posRes)=> {
        this.result = posRes;
      }, (errRes:HttpErrorResponse)=> {
        if(errRes.error instanceof Error) {
          console.log("Client side error");
        } else {
          console.log("Server side error");
        }
      });
    }
  }
   