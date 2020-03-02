var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parents = /** @class */ (function () {
    function Parents() {
    }
    Parents.prototype.fun_one = function () {
        return "Hello1";
    };
    return Parents;
}());
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child1.prototype.fun_two = function () {
        return "Hello2";
    };
    return Child1;
}(Parents));
var Subject = /** @class */ (function () {
    function Subject() {
    }
    Subject.prototype.fun_three = function () {
        return "Hello3";
    };
    return Subject;
}());
var obj11 = new Parents();
console.log(obj11.fun_one());
