var str1:string = "ANgular 8";
var str2:string = 'NodeJS';
var str3:string = `MongoDB`;

console.log(str1, str2, str3);

var grp_name:string = "employees";
var sal:number = 50000;
var sqlQuery:string = `select * from ${grp_name} where empSal>${sal}`;

console.log(sqlQuery);

var uname:string = "admin";
var upwd:string = "admin";
var login:string = "login details";
var query:string = `select * from ${login} where uname='${uname}' and upwd='${upwd}'`;

console.log(query);