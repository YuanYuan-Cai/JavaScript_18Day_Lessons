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

//String()函数
//indexOf()查找第一个子串的位置，0开始
//var sToken = new String('Hello World!');
//var l = sToken.indexOf('o');
//console.log(l);
//
//// charAt(),返回当前位置的字符
//console.log(sToken.charAt(l));
//
//// substring(),取一个子串
//console.log(sToken.substring(0.l+1));
//
//// replace()
//console.log(sToken.replace('o','A'));
//console.log(sToken.replace(/o/g,'A'));

// 特殊字符
//str = '\'--\"--\\--\t--';
//console.log(str);

// 回车\r\n
// \r 0x0d CR carrage return 回车
// \n 0x0a LF line feed 换行
// 1，文件是线性存储的，\r\n字符表示换行，编辑器为了照顾人类感受，见到\r\n，显示为换行
// 2，为什么有CR，LF的区别。回车代表回到行首，换行代表下一行（打字机）
// 3，window和Unix，linux里面表示的回车的字符不一样
//    window：\r\n
//    Unix\Linux:\n
//    Mac:\r


//str = 'a\r\nb\r\nc';
//console.log(str);

//str = '\u6211';
//console.log(str);
//
//// toUpperCase()全变大写
//str = 'aaa';
//str = str.toUpperCase();
//console.log(str);
//
////toLowerCase()全变小写
//str = 'BBB';
//str = str.toLowerCase();
//console.log(str);

// trim()去除空格，\t
str = '  aaaa bbb\t';
console.log(str);
console.log(str.trimLeft());
console.log(str.trimRight());
console.log(str.trim());

编码与解码
编码:用户输入字符,计算机记录对应二进制的值
解码:计算机根据记录的二进制值,显示成人类可以认识的字符图像

字符集
字符集(Charset):是一个系统支持的所有抽象字符的集合
字符编码(Character Encoding):字符集的编解码规则
常见字符集:
	- ASCII字符集
		- 0-127个
		- 每个字符一个字节
		- 0:30h,A:41h,a:61h
	- GB字符集族:
		- GB2312,GBK,GB18030
	- Unicode字符集族:
		- UTF-8,UTF-16,UTF-32
	- UCS字符集族:
		- UCS-2,UCS-4
