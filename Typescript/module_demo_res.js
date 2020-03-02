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
var demos;
(function (demos) {
    class cl_one {
        constructor() {
            this.arr = [10, 20, 30, 40, 50];
        }
    }
    demos.cl_one = cl_one;
})(demos || (demos = {}));
/*
///<reference path="./module_demo.ts"/>
console.log(Transactions.credit(), Transactions.debit(), Transactions.ministatement() );
*/
/*
///<reference path = "./module_demo.ts" />
console.log(Staff.Emp, Staff.Mang, Staff.Clerk);
*/
/*
///<reference path = "./module_demo.ts" />
console.log(Demo.obj.host, Demo.obj.user, Demo.obj.pass, Demo.obj.database);
*/
/*
///<reference path="./module_demo.ts"/>
console.log(Demo.fun_two());
*/
/*
///<reference path = "./module_demo.ts" />
console.log(demo.fun_one("Angular"));
*/
/*
///<reference path ="./module_demo.ts"/>
console.log(Demo1.Demo2.wish);
*/
///<reference path = "./module_demo.ts" />
console.log(new demos.cl_one().arr);
console.log(new demos.cl_one().arr.reduce((fv, sv) => {
    return fv + sv;
}));
