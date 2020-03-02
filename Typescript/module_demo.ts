/* 
module Transactions {
  export function credit():string {
    return "Credit...!!!" ;
  }
  export function debit():string {
    return "Debit...!!!";
  }
  export function ministatement():string {
    return "Mini statement...!!!";
  }
}
*/

/*
module Staff {
  export const Emp:number = 1000;
  export const Mang:number = 20;
  export const Clerk:number = 50;
}
*/

/*
module Demo {
  export let obj:any = {
    host : "localhost",
    user : "root",
    pass : "root",
    database : "workshop"
  };
}
*/

/*
function fun_one():string {
  return "Hello";
}

module Demo {
  export function fun_two():string {
    return fun_one();
  }
}
*/

/*
module demo {
  export function fun_one(arg:string) {
    return "Welcome to "+ arg;
  }
}
*/


/*
module Demo1 {
  export module Demo2{
    export let wish:string = "Hello";
  }
}
*/


module demos{
  export class cl_one{
    arr:any[] = [10, 20, 30, 40, 50];
  }
}