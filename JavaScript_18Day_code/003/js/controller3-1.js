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
