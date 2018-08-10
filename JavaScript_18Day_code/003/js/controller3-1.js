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

