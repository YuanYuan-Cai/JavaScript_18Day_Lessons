//构造函数
//我们需要一种函数，能够每次以相同的方式构造对象。
//同时，改动这个函数，所有的对象都能跟着改变

//构造函数，名称以大写字母开头（约定俗成）

function Student(name,age,gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}

var std = new Student('wangli',30,'male');

var a = new Object();

//与function Student等价
function Student2(name,age,gender){
	var object = {};
	object.name = name;
	object.age = age;
	object.gender = gender;
	
	return object;
}

//与std等价
var std2 = Student2('wangli',30,'male');

// 三种命名规则
// 1,匈牙利命名规则（微软常用）
// 	- 变量名：属性+类型+对象描述
// 		- 属性:成员变量:m_ 静态成员变量:s_ 普通:<没有>
// 		- 类型:整形:i,数组:a,字符串:str
// 	-	 对象描述:单词(单词首字母大写)
// 2,小驼峰命名规则
// 	- 变量名：对象描述（JavaScript成员函数，成员变量...）
// 		- 第一个单词的首字母小写，其他单词首字母大写
// 3,大驼峰命名规则（JavaScript构造函数）
// 	- 变量名：对象描述
//		- 所以单词首字母大写