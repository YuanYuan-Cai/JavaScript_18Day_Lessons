//String对象
//	- 构造函数
//	- 成员函数
//字符集
//	- Unicode系列
//	- GBK系列
//JSON

// String()和string

var str = String(12345);

//console.log(typeof(str));
str.a = 5;
// var tmp = new String(str);
// tmp.a = 5;
// tmp摧毁
//console.log(str.a);
// var tmp1 = new String(str);
// 访问tmp1.a;
// tmp1摧毁

var objString = new String(12345);
//console.log(objString);
//objString.a = 5;
//console.log(objString.a);

// String可以用数组方式访问
//for(var i = 0;i < objString.length;i++){
//	console.log(objString[i]);
//}
//
//for(var i = 0;i < str.length;i++){
//	console.log(str[i]);//包装类
//}

// 【课时27】String 27:09