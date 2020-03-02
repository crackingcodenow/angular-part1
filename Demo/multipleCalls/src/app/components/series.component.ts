import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { CountriesService } from '../services/countries.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'series',
  templateUrl: './series.component.html',
  styles: []
})
export class SeriesComponent implements OnInit {

  private res_one:any;
  private res_two:any;

  constructor(private service_one:CustomersService, 
              private service_two:CountriesService) { }

  ngOnInit() {
    this.service_one.getCustomers().subscribe((posRes1)=>{
      this.res_one=posRes1;
      this.service_two.getCountries().subscribe((posRes2)=>{
        this.res_two=posRes2;
      }, this.errCallback);
    }, this.errCallback);
  }

  public errCallback = (errRes:HttpErrorResponse)=> {
    if(errRes.error instanceof Error) {
      console.log("Client Side Error");
    } else {
      console.log("Server side Error");
    }
  }
}
