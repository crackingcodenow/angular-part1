class class_one {
  private para1: any; private para2: any; private para3: any;

  constructor(private obj2: class_two, private obj3: class_three, private obj4: class_four) {
    this.para1 = obj2;
    this.para2 = obj3;
    this.para3 = obj4;
  }

  public myFun():any {
    console.log(this.para1.myFun(), this.para2.myFun(), this.para3.myFun());
  }
}

class class_two {
  public myFun():any {
    return "Angular";
  }
}

class class_three {
  public myFun():any {
    return "NodeJS";
  }
}

class class_four {
  public myFun():any {
    return "MongoDB";
  }
}

let obj = new class_one(new class_two(), new class_three(), new class_four());
obj.myFun();