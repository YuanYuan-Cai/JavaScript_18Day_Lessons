// this用法：
//1,脚本中,this初始化为window

//console.log(this);

//2，在普通函数中，this初始化为window

//function f(){
//	console.log(this);
//}
//
//f();

//3,在object调用的函数中，this被指定为object，谁调用，指向谁

//var obj = {
//	name : 'a',
//	f2:function(x,y){
//		console.log(this);
//	}
//};
//
//obj.f2(1,2);
//
//var f = obj.f2;
//var arr = [];

//4,call\appky中，this可以被指定，被指定为第一参数
//f.call(obj,1,2);
//f.call(arr,1,2);
//f.apply(obj,[1,2]);

//5,在new的构造函数中，this被执行正在创建的对象
//function F(){
//	console.log(this);
//}
//var obj = new F();
//
//var name = 'The window';
//var object = {
//	name:'my object',
//	getNameFunc:function(){
//		return function(){
//			return this.name;
//		};
//	},
//	getNameFunc2:function(){
//			return this.name;
//	}
//};
//
//console.log(object.getNameFunc()());//The window
//console.log(object.getNameFunc2());//my object