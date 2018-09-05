// 对象属性可以增删改查
// 增加一个属性

var obj = {};
obj['0'] = 'aaa';
obj['1'] = 'bbb';
obj.a = 'aaa';
obj.b = 'bbb';

//var arr = [];
//arr[0] = 'aaa';
//arr[1] = 'bbb';

obj.f1 = function(){
	console.log('ff.........');
};

//function f2(){
//	aa = 5;//实际上等价于window.aa=5
////	var aa = 5;
//};
//f2();
//alert(aa);


//查询一个属性是否存在？
//1.in
//console.log(('a' in obj));
////2.hasOwnProperty()
//console.log(obj.hasOwnProperty('a'));
//
////删除一个属性
//// delete
//delete obj.a;
//console.log(('a' in obj));
//console.log(obj.hasOwnProperty('a'));

//var arr = [];
//arr['a'] = 'c';
//delete arr['a'];
//console.log(arr);

// 修改一个属性
obj.a = 123;

// 枚举
// 其自己属性可以枚举
// 继承来的不能枚举出
for(var p in obj){
	console.log(p);
}

obj.toString();//没有枚举出来

//判断对象的属性是否能枚举：
console.log(obj.propertyIsEnumerable('a'));
console.log(obj.propertyIsEnumerable('toString()'));