import { Component } from '@angular/core';
import { dbService } from '../services/db.service';

@Component ({
  selector: "oracle",
  templateUrl: "./oracle.component.html"
})

export class oracleComponent {
  private result:string;

  constructor(private obj:dbService) { }

  ngOnInit() {
    this.result = this.obj.oracleDB();
  }
}