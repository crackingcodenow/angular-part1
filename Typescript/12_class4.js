var class_one = /** @class */ (function () {
    function class_one(obj2, obj3, obj4) {
        this.obj2 = obj2;
        this.obj3 = obj3;
        this.obj4 = obj4;
        this.para1 = obj2;
        this.para2 = obj3;
        this.para3 = obj4;
    }
    class_one.prototype.myFun = function () {
        console.log(this.para1.myFun(), this.para2.myFun(), this.para3.myFun());
    };
    return class_one;
}());
var class_two = /** @class */ (function () {
    function class_two() {
    }
    class_two.prototype.myFun = function () {
        return "Angular";
    };
    return class_two;
}());
var class_three = /** @class */ (function () {
    function class_three() {
    }
    class_three.prototype.myFun = function () {
        return "NodeJS";
    };
    return class_three;
}());
var class_four = /** @class */ (function () {
    function class_four() {
    }
    class_four.prototype.myFun = function () {
        return "MongoDB";
    };
    return class_four;
}());
var obj = new class_one(new class_two(), new class_three(), new class_four());
obj.myFun();
