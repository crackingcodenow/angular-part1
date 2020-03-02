import { Injectable } from '@angular/core';

@Injectable ({
  providedIn : "root"
})

export class dbService {
  public oracleDB():string {
    return "Oracle soon...";
  }

  public mysqlDB():string {
    return "MySQL soon...";
  }
}


