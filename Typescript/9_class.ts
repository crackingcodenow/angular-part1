class hotel {
  private sub_one: string; sub_two: string; sub_three:string; //variable declaration

  constructor() {
    this.sub_one = "Angular9";   // constructor() used to initialize variables
    this.sub_two = "NodeJS";
    this.sub_three = "MongoDB";
  }

  public getSubOne():string {   // functions used to return the values in variables 
    return this.sub_one;        // and to resue the logic.
  }

  public getSubTwo():string {
    return this.sub_two;
  }

  public getSubThree():string {
    return this.sub_three;
  }
}

let obj:hotel = new hotel();      // creating an Object using "new" keyword.
console.log(obj.getSubOne(), obj.getSubTwo(), obj.getSubThree());   // calling the functions.