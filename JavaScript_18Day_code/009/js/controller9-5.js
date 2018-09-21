//类数组
//1，有下标，有length，有push和splice，就是一个类数组
//2，既可以当数组用，也可以当对象用
//3，DOM里面的数组都是类数组
//var arr = [1,2,3];
//
//var obj = {
//	'0':1,
//	'1':2,
//	'2':3,
//	'length':3,
//	'push':Array.prototype.push,
//	'splice':Array.prototype.splice
//};
//
//arr[3] = 4;
//obj['3'] = 4;
//
//arr.push(4);
//obj.push(4);
//-------
//var obj = {
//	'2':'a',
//	'3':'b',
//	'length':2
//	'push':Array.prototype.push,
//	'splice':Array.prototype.splice
//}

//obj.push('c');
//obj.push('d');
//↑运行出↓
//var obj = {
//	'2':'c',
//	'3':'d',
//	'length':2
//	'push':Array.prototype.push,
//	'splice':Array.prototype.splice
//}
//原因↓是push的实现方法的原因
//obj.push = function(x){
//	obj[obj.length] = x;
//	obj.length++;
//}

//闭包练习
function fa(x){
	var aaa = 0;
	function fb(x){
		if(x > 0){
			return fb(x-1);
		}else{
			aaa++;
			return aaa;
		}
	}
	
	if(x > 0){
		return fa(x-1);
	}else{
		return fb;
	}
}

var fb1 = fa(0);
console.log(fb1());

var fb2 = fa(1);
console.log(fb2());
console.log(fb1());
console.log(fb1());
console.log(fb1());
console.log(fb2());