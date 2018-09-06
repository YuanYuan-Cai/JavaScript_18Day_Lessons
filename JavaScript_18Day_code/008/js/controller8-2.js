// 包装类

var n1 = 123;
var n2 = new Number(123);

console.log(typeof(n1));//number
console.log(typeof(n2));//object

var n3 = n1 + n2;
console.log(n3);

var s1 = 'aaa';
var s2 = new String('aaa');

console.log(typeof(s1));//string
console.log(typeof(s2));//object

var s1 = true;
var s2 = new Boolean(true);

console.log(typeof(b1));//boolean
console.log(typeof(b2));//object

var arr = [1,2,3,4];
arr.length = 2;
console.log(arr);

var str = '1234';
str.length = 2;
//↓（str.length = 2;）等价于（31-33行）
//var strTmp = new String(str);
//strTmp.length = 2;
// strTmp摧毁
console.log(str);

var iNum =123;
iNum.toString();
// ↓（iNum.toString();）等价于39-41行
//var iTmp = new Number(iNum);
//iTmp.toString();
//iTmp被摧毁

true.toString();

