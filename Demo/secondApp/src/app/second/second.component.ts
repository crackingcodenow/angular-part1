import { Component } from '@angular/core';

@Component({
  selector: 'second',
  templateUrl: './second.component.html',
  // styleUrls: ['./second.component.css']
})
export class SecondComponent {

  private var_two:string;

  constructor() { 
    this.var_two="MySql soon...";
}

}
