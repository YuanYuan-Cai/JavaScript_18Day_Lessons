// Cookie

//console.log(document.cookie);
//// document.cookie将以字符串的方式返回所有的cookie字符。
//// 格式：cookiekey1=value1;cookiekey2=value2;
//
//document.cookie = 'key1=value1';
//console.log(document.cookie);
//
//document.cookie = 'key2=value2';
//document.cookie = 'key3=value3';
//document.cookie = 'key4=value4';
//console.log(document.cookie);
//
//document.cookie = 'key3=';
//console.log(document.cookie);
//
//document.cookie = 'key2=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
//console.log(document.cookie);

var r = 'v' + Math.random();
document.cookie = r + '=';
console.log(document.cookie);
