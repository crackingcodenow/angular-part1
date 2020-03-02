var Mod2;
(function (Mod2) {
    function revStr(arg) {
        return Array.from(arg).reverse().join("");
    }
    Mod2.revStr = revStr;
})(Mod2 || (Mod2 = {}));
///<reference path="./module_revStr1.ts"/>
var Mod1;
(function (Mod1) {
    function my_fun(arg) {
        return Mod2.revStr(arg);
    }
    Mod1.my_fun = my_fun;
})(Mod1 || (Mod1 = {}));
///<reference path="./module_revStr2.ts"/>
console.log(Mod1.my_fun("ANGULAR 8"));
