import { Component } from '@angular/core';
import { JavaService } from '../services/java.service';
import { WebapiService } from '../services/webapi.service';
import errCallBack from '../error/errCallBack';

@Component({
  selector: 'integration',
  templateUrl: './integration.component.html',
  styles: []
})
export class IntegrationComponent {
  private java:any;
  private webapi:any;

  constructor(private java_ser:JavaService,
              private webapi_ser:WebapiService) { }

  ngOnInit() {
    this.java_ser.getJavaData().subscribe((posRes1)=> {
      this.java = posRes1;
      this.webapi_ser.getWebAPIData().subscribe((posRes2)=>{
        this.webapi = posRes2;
      }, errCallBack);
    }, errCallBack);
  }

}
