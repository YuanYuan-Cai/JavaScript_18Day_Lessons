//number
//var iNum = 86;
//document.write('iNum = '+ iNum + '<br />');
//
////二进制，八进制，十六进制
////二进制
//var oNum = 070;
//document.write('oNum = '+ oNum + '<br />');
//
////十六进制
//var xNum = 0x1f;
//document.write('xNum = '+ xNum + '<br />');

//浮点数,GPU能做浮点数（常用于图像处理，人工智能），CPU也能做，但是慢
//var fNum = 1.5;
//document.write('fNum = '+ fNum + '<br />');

////科学计数法
//fNum = 1.5E7;//等价于1.5*10^7，E与e都可以
//document.write('fNum = '+ fNum + '<br />');
//
////Number是一个构造函数，构造函数命名常以大写字母开头
//iNum = Number.MAX_VALUE;
//document.write('iNum = '+ iNum + '<br />');
//
//iNum = Number.MIN_VALUE;
//document.write('iNum = '+ iNum + '<br />');

//iNum = Number.POSITIVE_INFINITY;
//document.write('iNum = '+ iNum + '<br />');

// 当数超过Number.MAX_VALUE时候，它们都是Infinity
//iNum = Number.MAX_VALUE * 1.1;
//document.write('iNum = '+ iNum + '<br />');
//document.write('(iNum == Number.POSITIVE_INFINITY) = '+ (iNum == Number.POSITIVE_INFINITY) + '<br />');
//
////“万物都是表达式”↓"+"的优先级比"=="高
////document.write('iNum == Number.POSITIVE_INFINITY = '+ iNum == Number.POSITIVE_INFINITY + '<br />');//false
//
////判断是不是Infinity，使用isFinite()
//document.write(' isFinite(iNum) = '+ isFinite(iNum) + '<br />');

//iNum = NaN;//Not a Number
//document.write('iNum = '+ iNum + '<br />');
//document.write('(iNum == NaN) = '+ (iNum == NaN) + '<br />');//false
//document.write('(iNum == iNum) = '+ (iNum == iNum) + '<br />');//false
//document.write('(iNum === iNum) = '+ (iNum === iNum) + '<br />');//false
//document.write('isNaN(iNum) = '+ isNaN(iNum) + '<br />');

//string
//""和''都可以
var sToken = "Hello World";
document.write('sToken = '+ sToken + '<br />');

sToken = 'Hello World';
document.write('sToken = '+ sToken + '<br />');

//如果双引号和单引号在字符串里都有，要用\转义
//sToken = 'Hello"' World";//报错Uncaught SyntaxError: Unexpected identifier
//document.write('sToken = '+ sToken + '<br />');
//sToken = 'Hello"\' World';
//document.write('sToken = '+ sToken + '<br />');

var sToken2 = sToken.concat(' abc',' ccc',' ccc',' ccc',' ccc',' ccc','我');//这里中文字符，算长度是按有一个算一个
document.write('sToken2 = '+ sToken2 + '<br />');
document.write('sToken2.length = '+ sToken2.length + '<br />');

//字符串查找定位,截取
//Hello World!
//012345678901
//0          1
sToken2 = 'Hello World!';
var iLength = sToken2.indexOf('o');//取出o是第几个位置
document.write('charAt = ' + sToken2.charAt(iLength) + '<br />');//得到第iLength位置的字母
document.write('substring = ' + sToken2.substring(0,iLength) + '<br />');//截取第0个到第iLength个字符（包含第0个，不包含第iLength个）

sToken2 = 'asdfv kllg 12sgjl ouxzs';
var iStart = sToken2.indexOf(' '),iEnd;
if(iStart != -1){
	iEnd = sToken2.indexOf(' ',iStart + 1);
	if(iEnd != -1){
		document.write('substring = ' + sToken2.substring(iStart + 1,iEnd) + '<br />');
	}
}
