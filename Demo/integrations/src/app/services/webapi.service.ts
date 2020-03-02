import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import URL from '../url/url';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  constructor(private service:RestService) { }
  public getWebAPIData():any{
    return this.service.makeRestAPICall(URL.WEBAPI);
  }
} 
