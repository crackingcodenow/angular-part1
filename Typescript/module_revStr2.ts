///<reference path="./module_revStr1.ts"/>
module Mod1 {
  export function my_fun(arg:string):string {
    return Mod2.revStr(arg);
  }
}