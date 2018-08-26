//类型转换&数组

//为什么要用console.log
//var obj={};
//document.write(obj);
//console.log(obj);
//
////typeof-----------------------------
//var x = 1;
//console.log('[typeof] x ' + typeof(x));//number
////console.log('[typeof] x ' + typeof x);
//
//x = 'abc';
//console.log('[typeof] x ' + typeof(x));//string
//
//x = true;
//console.log('[typeof] x ' + typeof(x));//boolean
//
//x = null;
//console.log('[typeof] x ' + typeof(x));//object
//
//x = undefined;
//console.log('[typeof] x ' + typeof(x));//undefined
//
//var x2;
//console.log('[typeof] x2 ' + typeof(x2));//undefined
//

////隐式类型转换-------------------------
//var sNum = '2';
//var iNum = 2;
//var ret = sNum + iNum;
//console.log('[隐式类型转换] ' + typeof ret);//string
//
//ret = sNum -iNum;
//console.log('[隐式类型转换] ' + typeof ret);//number

//显示类型转换----------------------------
//1，Number();把实质上是一个数的返回相应的数，不是数的返回NaN
//var iNum = Number(false);
//console.log('[Number()]= ' +iNum);//0
//
//iNum = Number(true);
//console.log('[Number()]= ' +iNum);//1
//
//iNum = Number(undefined);
//console.log('[Number()]= ' +iNum);//NaN
//
//iNum = Number(null);
//console.log('[Number()]= ' +iNum);//0
//
//iNum = Number('10');
//console.log('[Number()]= ' +iNum);//10
//
//iNum = Number('1.5');
//console.log('[Number()]= ' +iNum);//1.5
//
//iNum = Number('1.5.3');
//console.log('[Number()]= ' +iNum);//NaN
//
//iNum = Number('');
//console.log('[Number()]= ' +iNum);//0

//Number()小结
//false,null,''→0
//undefined→NaN
//不是数→NaN
//不支持进制数
//----------------
//undefined == null
//true == 1
//false == 0
//[] == ''
//{} == '[object Object]'
//[5] == '5'

//2,parseInt() parse,parser
// parseInt()遇到数字
//var iNum = parseInt('1234');
//console.log('[parseInt()]= ' +iNum);
//
//iNum = parseInt('1234a');
//console.log('[parseInt()]= ' +iNum);
//
//iNum = parseInt('1.5.3');
//console.log('[parseInt()]= ' +iNum);
//
//iNum = parseInt('100px');
//console.log('[parseInt()]= ' +iNum);
//
//iNum = parseInt('a1234');//NaN
//console.log('[parseInt()]= ' +iNum);
//
//iNum = parseInt('a1234',16);
//console.log('[parseInt()]= ' +iNum);
//
////0x---→16进制（c/c++）；---h→16进制（汇编语言）
//iNum = parseInt('0xa0');
//console.log('[parseInt()]= ' +iNum);
//
////0---→ 8进制（c/c++）JavaScript以0开头表示8进制无效
//iNum = parseInt('070');//70
//console.log('[parseInt()]= ' +iNum);
//
//iNum = parseInt('');//NaN
//console.log('[parseInt()]= ' +iNum);
//
//iNum = parseInt('1.1E5');//1
//console.log('[parseInt()]= ' +iNum);
//
//iNum = parseFloat('1.1E5');//110000
//console.log('[parseInt()]= ' +iNum);
//
//iNum = parseInt('123.9');//123
//console.log('[parseInt()]= ' +iNum);
//
//iNum = parseInt('A0',16);//160
//console.log('[parseInt()]= ' +iNum);
//
//iNum = parseInt('70',8);//56
//console.log('[parseInt()]= ' +iNum);
//
//iNum = parseInt('63',9);//63
//console.log('[parseInt()]= ' +iNum);
//
//iNum = parseInt(undefined);//NaN
//console.log('[parseInt()]= ' +iNum);
//
//iNum = parseInt(null);//NaN
//console.log('[parseInt()]= ' +iNum);
//
//iNum = parseInt(false);//NaN
//console.log('[parseInt()]= ' +iNum);
//
//iNum = parseInt(true);//NaN
//console.log('[parseInt()]= ' +iNum);
//如何记忆Number()和parseInt()区别
// Number本质上可以转化为数字，parseInt看上去是数字
//1，Number可以，parseInt不可以，false，null
//2，Number不可以，parseInt可以，数字开头掺杂其他
//3，都不可以，undefined，字母开头的字符串


//3,parseFloat()
//var fNum = parseFloat('10');
//console.log('[parseFloat()]= ' +fNum);
//
//fNum = parseFloat('10.00');//10
//console.log('[parseFloat()]= ' +fNum);
//
//fNum = parseFloat('10.5');
//console.log('[parseFloat()]= ' +fNum);
//
//fNum = parseFloat('1.5.3');
//console.log('[parseFloat()]= ' +fNum);
//
//fNum = parseFloat(' 1.7 ');//1.7
//console.log('[parseFloat()]= ' +fNum);
//
//fNum = parseFloat('1.5aaa');//1.5
//console.log('[parseFloat()]= ' +fNum);
//
//fNum = parseFloat('1.1E5');
//console.log('[parseFloat()]= ' +fNum);
//
//fNum = parseFloat('1.1E5aaa');
//console.log('[parseFloat()]= ' +fNum);

//parseFloat()和parseInt()的区别
//parseFloat()支持小数点和科学计数法，其他都一样

//4,isNaN()调用Number()
console.log('[isNaN] = ' + isNaN(NaN));
console.log('[isNaN] = ' + isNaN('aaa'));
console.log('[isNaN] = ' + isNaN(undefined));
console.log('[isNaN] = ' + isNaN(null));
console.log('[isNaN] = ' + isNaN('123'));
console.log('[isNaN] = ' + isNaN(''));
