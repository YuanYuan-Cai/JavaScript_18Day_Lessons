// + 数字加法
var iNum = 3 + 3;
document.write('[+] iNum = '+ iNum + '<br />');//6

iNum = iNum + 3;
document.write('[+] iNum = '+ iNum + '<br />');//9

iNum = Number.MAX_VALUE + 1E307;
document.write('[+] iNum = '+ iNum + '<br />');//Infinity

iNum = iNum + 1E307;
document.write('[+] iNum = '+ iNum + '<br />');//Infinity

iNum = Number.MAX_VALUE + 1E307 - Number.MAX_VALUE
document.write('[+] iNum = '+ iNum + '<br />');//Infinity

iNum = iNum + 1;
document.write('[+] iNum = '+ iNum + '<br />');//Infinity

iNum = Number.Infinity + 1;
document.write('[+] iNum = '+ iNum + '<br />');//NaN

// + 字符串拼接
var sToken = 'abc' + 'edf';
document.write('[+] sToken = '+ sToken + '<br />');//abcedf

var sToken = '5' + 5;
document.write('[+] sToken = '+ sToken + '<br />');//55

var sToken = 5 + '5';
document.write('[+] sToken = '+ sToken + '<br />');//55

var sToken = 5 + 'p';
document.write('[+] sToken = '+ sToken + '<br />');//5p

var sToken = 5 - '5';
document.write('[-] sToken = '+ sToken + '<br />');//0

var sToken = 5 - 'p';
document.write('[-] sToken = '+ sToken + '<br />');//NaN

// - 数字减法
iNum = 10 - 3;
document.write('[-] iNum = '+ iNum + '<br />');//7

// * 数字乘法
iNum = 3 * 7;
document.write('[*] iNum = '+ iNum + '<br />');//21

// / 数字除法
iNum = 4 / 3;
document.write('[/] iNum = '+ iNum + '<br />');// 1.3333333333333333

iNum = 4 / 0;
document.write('[/] iNum = '+ iNum + '<br />');//Infinity

iNum = 0 / 0;
document.write('[/] iNum = '+ iNum + '<br />');//NaN

// % 取模,前面的数可以是一个小数
iNum = 4 / 3;
document.write('[%] iNum = '+ iNum + '<br />');//1.3333333333333333

iNum = 4.5 / 3;
document.write('[%] iNum = '+ iNum + '<br />');//1.5

iNum = 4 / 0;//a = x / y;(y>b>=0)b = x % y;x = a * y + b
document.write('[%] iNum = '+ iNum + '<br />');//NaN

iNum = 0 / 0;
document.write('[%] iNum = '+ iNum + '<br />');//NaN

// ++
iNum = 5;
//iNum++;
document.write('[++] iNum = '+ iNum++ + '<br />');//5,iNum = 6

iNum = 5;
document.write('[++] iNum = '+ ++iNum + '<br />');//6,iNum = 6

iNum = 5;
iNum = iNum++ + 10 + ++iNum;
//iNum:22
//iNum = 5 + 10 + ++iNum;
//iNum = 15 + ++iNum;
//iNum = 15 + 7;
//iNum = 22;
//22
document.write('[++] iNum = '+ iNum + '<br />');//22

iNum = 7;
iNum = 10 - ++iNum + ++iNum - iNum++ - iNum++;
//iNum:-8
//iNum = 10 - 8 + ++iNum - iNum++ - iNum++;
//iNum = 2 + 9 - iNum++ - iNum++;
//iNum = 11 - 9 - iNum++;
//iNum = 2 - 10;
//iNum = -8;
document.write('[++] iNum = '+ iNum + '<br />');

// --
iNum = 5;
--iNum;
document.write('[--] iNum = '+ iNum + '<br />');//4

iNum = 5;
iNum = iNum-- + 10 + --iNum;
//iNum:3
//iNum = 5 + 10 + --iNum;
//iNum = 15 + --iNum;
//iNum = 15 + 3;
//iNum = 18;
//18
document.write('[--] iNum = '+ iNum + '<br />');//18

iNum = 5;
iNum = (13 % 7) + 4 * 7 /iNum-- - ++iNum
//iNum = 5
//iNum = 6 + 28/5 - ++iNum
//iNum = 6 + 5.6 - ++iNum
//iNum = 11.6 - 5
//6.6
document.write('[--] iNum = '+ iNum + '<br />');



