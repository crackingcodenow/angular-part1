/*
1. Two classes are present.
2. CLass1 returning class2
3. Each class contains myFunction()
4. class1 myFunction() returning class2 Object.
5. class2 myFunction() returning Hello msg.
*/


class class_one {
  
  public myFunction():any {
    return new class_two();
  }

}

class class_two extends class_one {

  public myFunction():any {
    return "Hello World...!!";
  }
}

let obj1 = new class_one();
console.log(obj1.myFunction().myFunction());
