//预编译-函数调用
//- 函数调用:
//	- 创建活动对象AO(Active Object)(上下文)
//	- 预编译:
//		- scope chain(作用域链)
//		- 初始化arguments
//		- 初始化形参,将arguments中的值赋值给形参
//		- 找出所有的变量声明,按照变量名加入AO,如果已经存在,忽略
//		- 找出所有的函数声明,按照函数名加入AO,如果已经存在同名变量或者函数,替换
//		- this初始化
//	- 解释执行

// 8,函数中，所有变量声明，在函数的预编译阶段完成,所有变量的声明与实际书写的位置无关
//function f(){
//	console.log(aa);//undefined
//	var aa = 5;
//	console.log(aa);//5
//}
//f();

//9,在函数中，所有的函数声明，在函数的预编译阶段完成，所有函数的声明与实际的书写位置无关
//function f(){
//	console.log(haha);
//	function haha(){
//		console.log('h1');
//	}
//}
//f();

//10,在函数中，如果变量与函数同名，那么，函数将覆盖变量
//function f(){
//	console.log(haha);
//	var haha = 123;
//	function haha(){
//		console.log('h1');
//	}	
//}
//f();


//11,在函数中，只有函数能够覆盖变量，变量无法覆盖函数
//function f(){
//	console.log(haha);
//	function haha(){
//		console.log('h1');
//	}
//	var haha = 123;	
//}
//f();

//12,在函数中，预编译中后面的函数声明会覆盖前面的函数声明，并且，忽略参数
//function f(){
//	console.log(haha(1));
//	console.log(haha);
//	function haha(a){
//		console.log('haha1');
//	}
//	function haha(a,b){
//		console.log('haha2');
//	}
//}
//f();

//13,当函数预编译后,遇到需要访问的变量或者函数,优先考虑自己AO中定义的变量和函数
// 如果找不到,才会在其定义的上一层AO中寻找,直到到达GO
//var scope = 'global';
//function t(){
//	console.log(scope);//undefined
//	var scope = 'local';
//	console.log(scope);//local
//}
//t();
//console.log(scope);//global

//
//GO:
//scope:'global'
//T:function
//

//console.log(scope);//undefined
//var scope = 'global';
//function t(){
//	var scope = 't-local';
//	function t2(){
//		console.log(scope);//undefined
//		var scope = 't2-local';
//		console.log(scope);//t2-local
//	}
//	t2();
//	console.log(scope);//t-local
//}
//t();
//console.log(scope);//global
//
//GO:
//scope:'global'
//t:function

function test(x,x){
	console.log(x);//function
	x = 5;
	console.log(arguments);[12,5]
	function x(){}
}
test(12,13);

//GO:
//text:function
//
//text-AO:
//arguments:[12,13]
//x-(arugments[1]):function




