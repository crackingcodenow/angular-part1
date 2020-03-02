class Parents {
  public fun_one():string {
    return "Hello1";
  }
}

class Child1 extends Parents{
  public fun_two():string {
    return  "Hello2";
  }
}

class Subject {
  public fun_three():string {
    return "Hello3";
  }
}

let obj11 = new Parents();
console.log(obj11.fun_one());
