import { Component } from '@angular/core';
import { employeesService } from '../services/emp.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "emp",
  templateUrl:"./emp.component.html"
})

export class employeesComponent {

  private result:any;

  constructor(private service:employeesService) {}
  
  ngOnInit() {
    this.service.getEmployees().subscribe((posRes)=> {
      this.result= posRes; 
    }, 
    (errRes:HttpErrorResponse)=> {
      console.log(errRes); 
    }
    )
  }
}