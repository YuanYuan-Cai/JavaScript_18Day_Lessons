//document.write('<div>Hello2 World!</div>')

//声明一个变量
//var x;
////给变量赋值，立即数
//x = 1;

//声明时同时赋值
var x = 1;

//给变量赋值，其他变量
var y = x;

y = x + 1 + 11 -6;

//声明多个变量
var a1,a2,a3;

var b1 = 4,
    b2 = 5,
    b3 = 6;
    
document.write('b1 = ' + b1 + '<br>');
document.write('b2 = ' + b2 + '<br>');
document.write('b3 = ' + b3 + '<br>');

//alert(aa); //变量没有声明，就使用。报错 Uncaught ReferenceError: aa is not defined
aa = 5;//变量没有声明的时候，只有这种赋值情况下，是正常的。其他当变量没有声明，就使用情况，会报错
alert(aa);//正常

