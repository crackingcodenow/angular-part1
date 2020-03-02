var hotel = /** @class */ (function () {
    function hotel() {
        this.sub_one = "Angular9";
        this.sub_two = "NodeJS";
        this.sub_three = "MongoDB";
    }
    hotel.prototype.getSubOne = function () {
        return this.sub_one;
    };
    hotel.prototype.getSubTwo = function () {
        return this.sub_two;
    };
    hotel.prototype.getSubThree = function () {
        return this.sub_three;
    };
    return hotel;
}());
var obj = new hotel();
console.log(obj.getSubOne(), obj.getSubTwo(), obj.getSubThree());
