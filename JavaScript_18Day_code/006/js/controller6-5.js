// 函数的调用方式
// 1，函数的方式
// 2,作为方法
//var obj = {
//	add:function(a,b){
//		return a + b;
//	}
//};

//var obj = {};
//obj.add = function(a,b){
//		return a + b;
//};

//console.log(obj.add(1,2));
//console.log(obj['add'](1,2));
//
////3,构造函数
//var arr = new Array();

//4,间接调用
// 间接调用和直接调用，唯一的区别就是可以绑定this指针
// 如果不考虑this，这三种调用方式完全一样

function hypotenuse(a,b){
	return Math.sqrt(a * a + b * b);
}
this.hypotenuse(3,4);
hypotenuse.call(this,3,5);
hypotenuse.apply(this,[3,4]);
