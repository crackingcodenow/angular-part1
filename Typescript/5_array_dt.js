//number array:
var num_arr1 = [1, 2, 3, 4, 5];
var num_arr2 = [6, 7, 8, 9, 10];
// including foreach() loop to the above arrays.
num_arr1.forEach(function (element, index) {
    console.log(element, num_arr2[index]);
});
//string array:
var str_arr1 = ["Angular", "React", "Node", "Vue"];
var str_arr2 = ["MongoDB", "MySQL", "SQLServer", "CounchDB"];
str_arr1.forEach(function (element, index) {
    console.log(element, str_arr2[index]);
});
