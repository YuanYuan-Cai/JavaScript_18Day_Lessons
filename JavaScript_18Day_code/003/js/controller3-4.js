//逻辑运算

//！ && ||
var bRst = true;
var bRst2 = true;
document.write('[&&]bRst && bRst2 ?' + (bRst && bRst2) + '<br />');

//1,都是布尔。只要有一个false，就返回false
document.write('[&&]true && true ?' + (true && true) + '<br />');
document.write('[&&]true && false ?' + (true && false) + '<br />');
document.write('[&&]false && true ?' + (false && true) + '<br />');
document.write('[&&]false && false ?' + (false && false) + '<br />');

//2, x&&y->if x is false, return x,else return y
document.write('[&&]0 && true ?' + (0 && true) + '<br />');//0
//等价于false的有→null,0,undefined,'',NaN
document.write('[&&]null && true ?' + (null && true) + '<br />');//null
document.write('[&&]undefined && true ?' + (undefined && true) + '<br />');//undefined
document.write('[&&]NaN && true ?' + (NaN && true) + '<br />');//NaN

//使用x&&y时候，如果x为false（或者等价于false），后面的y不会被操作
var iCount = 0;
document.write('[&&]0 && (++iCount) ?' + (0 && (++iCount)) +'[' +iCount+ ']'+ '<br />');//0[0]
document.write('[&&]null && (++iCount) ?' + (null && (++iCount)) + '[' +iCount+ ']'+ '<br />');//null[0]
document.write('[&&]undefined && (++iCount) ?' + (undefined && (++iCount)) + '[' +iCount+ ']'+ '<br />');//undefined[0]
document.write('[&&]NaN && (++iCount) ?' + (NaN && (++iCount)) + '[' +iCount+ ']'+ '<br />');//NaN[0]

//3,基于&&的性质，所以写代码时候，经常的一种写法↓
//data && fn(data);

// ||
//1,都是布尔。只要有一个true，就返回true
document.write('[||]true || true ?' + (true || true) + '<br />');
document.write('[||]true || false ?' + (true || false) + '<br />');
document.write('[||]false || true ?' + (false || true) + '<br />');
document.write('[||]false || false ?' + (false || false) + '<br />');

//2, x||y->if x is true, return x,else return y

//3,基于||的性质，一种约定俗成的一种写法↓
//var event = e || window.event;

//!->！true == false,！false == true
document.write('[!]!false ?' + (!false) + '<br />');
document.write('[!]!true ?' + (!true) + '<br />');

/*
 * 运算符的优先级
▸ 优先级：低优先级让位于高优先级；同优先级从左到右
▸ ()
▸ !、 ++、 --
▸ *、 /、 %
▸ +、 -
▸ <、 >、 >=、 <=
▸ ==、 !=、 ===、 !==
▸ &&
▸ ||
▸ ？ … : …
▸ =、 +=、 -=、 *=、 /=、 %=
▸ ，
 */