//Prototype

//1，凡是函数，都有属性prototype
//2，凡是函数构造的对象，都有属性_proto_
//3，prototype，_proto_,指向同一个对象

//var obj = {};
//var obj2 = new Object();
//console.log(obj2.__proto__());
//console.log(Object.prototype);
//console.log(obj2.__proto__() === Object.prototype);
//
//// 不是只有大写字母开头的函数具备这个特性
function f(){};
var o3 = new f();
//console.log(f.prototype);
//console.log(o3.__proto__());
//console.log(f.prototype === o3.__proto__());

// Prototype的用法，生成的对象将获得prototype的属性和方法
var pt = f.prototype;
pt.abc = '123';
pt.sayHello123 = function(){
	console.log('hello');
}

console.log(o3.abc);
//o3.sayHello123();

o3.abc = '456';//o3上加上abc = '456'，prototype无变化
console.log(o3.abc);

var o4 =new f();
console.log(o4.abc);
//o4.sayHello123();

f.prototype.abc = '457';//改变prototype的abc

console.log(o4.abc);

o3.__proto__.abc ='456';
//虽然，_proto_和函数的prototye指向同一个对象，但是我们不建议用这样的写法
console.log(o4.abc);


