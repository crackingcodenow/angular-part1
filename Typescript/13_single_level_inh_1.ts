class Parent {
  public fun_one():string {
    return "Hello Parent...";
  }
}

class Child extends Parent{
  public fun_two():string {
    return "Hello Child...";
  }
}

let obj1 = new Parent(); console.log(obj1.fun_one());

let obj2 = new Child(); console.log(obj2.fun_one(), obj2.fun_two());