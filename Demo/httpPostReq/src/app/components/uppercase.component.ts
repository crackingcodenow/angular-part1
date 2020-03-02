import { Component } from '@angular/core';

import { UppercaseService } from "../services/uppercase.service";

import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'uppercase',
  templateUrl: './uppercase.component.html',
  styles: []
})
export class UppercaseComponent {
  private result:any;
 
  constructor(private service:UppercaseService) { }
 
  ngOnInit() {
  }
 
  public clickMe(obj:any):any{
      this.service
          .convertToUpperCase(obj)
          .subscribe((posRes)=>{
            this.result = posRes;
          },
          (errRes:HttpErrorResponse)=>{
            console.log(errRes);
      });
  }
}
