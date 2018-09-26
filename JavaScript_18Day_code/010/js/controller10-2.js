//编码与解码
//编码:用户输入字符,计算机记录对应二进制的值
//解码:计算机根据记录的二进制值,显示成人类可以认识的字符图像
//
//字符集
//字符集(Charset):是一个系统支持的所有抽象字符的集合
//字符编码(Character Encoding):字符集的编解码规则
//常见字符集:
//	- ASCII字符集
//		- 0-127个
//		- 每个字符一个字节
//		- 0:30h,A:41h,a:61h
//	- GB字符集族:
//		- GB2312,GBK,GB18030
//	- Unicode字符集族:
//		- UTF-8,UTF-16,UTF-32
//	- UCS字符集族:
//		- UCS-2,UCS-4
//
//乱码问题
//	- 浏览器(JS引擎),通常遵循UCS-2字符集,支持部分UTF-16属性
//	- HTML/CSS/JS文件字符集通常为UTF-8
//	- 可能存在HTML/CSS/JS文件字符集为GBK的情况
//	- 当文件的字符集和处理文件的程序(比如:浏览器,文本编辑器)字符集不相符时,程序解码后的文字不具有可读性,称为乱码
//
//HTTP协议
//- HTTP Request & Response 
//	- Resp: Content-Type 
//	- Rqst: Accept-Charset 
//- HTML
//	- meta
//- Content-Type优先级高于 meta 
//
//乱码问题
//- 字符集：
//	- 文本文件本身的字符集 
//	- 服务器通知浏览器使用何种字符集
//	- 浏览器终采用的字符集
//- 解决乱码问题：
//	- 最优：
//		- 【编程】文本文件使用统一字符集，如UTF-8 
//		- 【编程】正确填写meta。
//		- 【服务器设定】Content-Type不设定字符集
//	- 次优：
//		- 【编程】正确填写meta 。
//		- 【服务器设定】Content-Type不设定字符集

//练习，编写一个方法，求一个字符串的长度
// GB2312 字母数字1个字节，中国字是两个字节

function getBytes(str){
	var num = 0;
	for(var i = 0;i < str.length;i++){
		if(str.charCodeAt(i) > 127){
			num += 2;
		}else{
			num ++ ;
		}
	}
	return num;
}

console.log(getBytes('a我'));
console.log(getBytes('abd'));
console.log(getBytes('今天天气真好'));

// 转码
// GBK转UTF-8
var arrUint8 = new Uint8Array([206,210]);
var decoder = new TextDecoder('gbk');
document.write(decoder.decode(arrUint8));
// UTF-8转GBK
arrUint8 = new Uint8Array([230,136,145]);
decoder = new TextDecoder('itf-8');
document.write(decoder.decode(arrUint8));
//encode
var str = '我';
var encoder = new TextEncoder('utf-8');
console.log(encoder.encode(str));


