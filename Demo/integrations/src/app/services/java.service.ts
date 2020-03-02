import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import  URL  from '../url/url';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  constructor(private service:RestService) { }
  public getJavaData():any {
    return this.service.makeRestAPICall(URL.JAVA);
  }
}
