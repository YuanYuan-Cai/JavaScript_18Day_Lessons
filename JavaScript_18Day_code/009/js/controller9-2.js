//闭包
//函数的AO通过scope chain相互连接起来,使得函数体内的变量都可以保存在
//函数的AO,这样的特性称为"闭包"
//- 闭包的危险
//	- 闭包会造成原有的AO不释放,产生内存泄漏
//- 闭包的应用:
//	- 实现公有变量
//	- 缓存存储结构
//	- 封装,实现属性私有化
//	- 模块化开发,防止污染全局变量

// 闭包的应用：

//实现公有变量
//累加器

//var count = 0;
//
//...一万行代码

//function add(){
//	var count = 0;
//	function addAction(){
//		count++;
//		console.log(count);
//		return count;
//	}
//	return addAction;
//}
//
//var myAdd = add();
//myAdd();
//myAdd();
//myAdd();

// 缓存存储结构
//function add(){
//	var count = 0;
//	function addAction(){
//		count++;
//		console.log(count);
//		return count;
//	}
//	function clearAction(){
//		count = 0;
//		console.log(count);
//		return count;
//	}
//	return [addAction,clearAction];
//}
//
//var myAdd = add();
//myAdd[0]();
//myAdd[0]();
//myAdd[0]();
//myAdd[0]();
//myAdd[1]();
//myAdd[0]();
//myAdd[0]();

// 鼓励使用方法，不鼓励直接操作变量
//function counter(){
//	var count = 0;
//	var adder = {
//		addAction:function(){
//			count++;
//			console.log(count);
//			return count;
//		},
//		clearCount:function(){
//			count = 0;
//			console.log(count);
//			return count;
//		}
//	};
//	return adder;
//}
//
//var myCounter = counter();
//myCounter.addAction();
//myCounter.addAction();
//myCounter.addAction();
//myCounter.addAction();
//myCounter.clearCount();
//myCounter.addAction();
//myCounter.addAction();
//console.log('------------------------------');
//var myCounter2 = counter();
//myCounter2.addAction();
//myCounter2.addAction();
//myCounter2.addAction();
//myCounter2.addAction();
//myCounter2.clearCount();
//myCounter2.addAction();
//myCounter2.addAction();

// 模块化开发，全部使用闭包，不允许使用公有变量

// 软件工程规定的思路：第一，尽量避免错误，第二，如果错误不可避免，那么让错误更早的暴露

// 练习1
//function outer(){
//	var num = 100;
//	function add(){
//		num ++;
//		console.log(num);
//	}
//	return add;
//}
//
//var fn = outer();
//fn();//101
//fn();//102
//fn();//103
//
//var fn2 = outer();
//fn2();//101

// 练习2
//function outer(){
//	var result = new Array();
//	for(var i = 0;i < 2; i++){
//		result[i] = function(){
//			return i;
//		};
//	}
//	return result;
//}
//
//var fn = outer();
//console.log(fn[0]());//2
//console.log(fn[1]());//2

//outer()声明:脚本的scope chain ->copy[GO],生成自己的:[GO,outer-AO]
//result[0] = function(){}:outer的scope chain - >{GO,outer-AO},没运行
//result[1] = function(){}:outer的scope chain - >{GO,outer-AO},没运行
//result[0] = function(){}:outer的scope chain - >{GO,outer-AO},生成自己的scope chain:[GO,outer-AO,f-AO]
//result[1] = function(){}:outer的scope chain - >{GO,outer-AO},生成自己的scope chain:[GO,outer-AO,f-AO]

// 解这种问题的思路：
// 1，立即执行函数
// 2，立即执行函数内部，再声明函数
//function outer(){
//	var result = new Array();
//	for(var i = 0;i < 2; i++){
//		result[i] = function f1(x){
//			function f2(){
//				return x;
//			}
//			return f2;
//		}(i);
//	}
//	return result;
//}
//
//var fn = outer();
//console.log(fn[0]());//0
//console.log(fn[1]());//1

//outer()声明:脚本的scope chain ->copy[GO],生成自己的:[GO,outer-AO]
//f1 sc copy [GO,outer-AO],生成自己的:[GO,outer-AO,f1.0-AO]
//[0] = f2 copy [GO,outer-AO,f1.0-AO]
//f1 sc copy [GO,outer-AO],生成自己的:[GO,outer-AO,f1.1-AO]
//[1] = f2 copy [GO,outer-AO,f1.1-AO]
//[GO,outer-AO,f1.0-AO,f2.0-AO]//0
//[GO,outer-AO,f1.1-AO,f2.1-AO]//1

