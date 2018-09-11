//函数作用域[[scope]]
//	- 外部对内部可见
//	- 内部对外部不可见
//	- 内部优先
//JS中只有函数级别的作用域,没有块级别的作用域;
//换句话,
//只有进入或者退出函数的时候,作用域会发生变化

//作用域链

//1,外部对内部可见
//var scope = 'g';
//function t(){
//	console.log(scope);//g
//	console.log(scope);//g
//}
//t();

//2,内部对外部不可见
//function t(){
//	var scope = 'l';
//}
//t();
//console.log(scope);//报错scope is not defined

//3，都可见时，内部优先
//var scope = 'g';
//function t(){
//	console.log(scope);//undefined
//	var scope = 'l';
//	console.log(scope);//1
//}
//t();

//JS的作用域，都是函数级别的。

//var scope = 'g';
//if(true){
//	var scope = '1';
//	console.log(scope);//1
//}
//console.log(scope);//1

//for(var i = 0;i < 10;i++){
//	
//}
//console.log(i);//10

//function f(){
//	aa = 5;
//}
//f();
//console.log(aa);//5


//执行环境和作用域链
//执行环境(execution context),定义了执行期间可以访问的变量和函数
//	- 全局执行环境
//		- Global Object(window)
//		- 从见到JS代码开始创建
//		- 到网页关闭时销毁
//	- 函数执行环境
//		- Activation Object
//		- 从函数调用开始创建
//		- 到函数调用结束时销毁
//		
//执行环境(EC)和作用域链
//	- 作用域[[scope]],每个函数都有
//	- 作用域是私有属性,只能由JS引擎访问
//	- 作用域链,是AO和GO构成的链
//	- 所谓执行环境,就是根据作用域依次查找变量和函数:
//		- 找到即停;
//		- 全部找完无果,报错
//	- 作用域链每个函数都有
//
//生成作用域链
//- 每个人函数在定义(函数声明\函数表达式)时会拷贝其父亲函数的作用域链;
//- 在函数被调用时,生成AO然后将AO压入作用域链的栈顶


//var g = 'g';
//function fa(){
//	var a = 'a';
//	function fb(){
//		var b = 'b';
//	}
//	fb();
//}
//fa();

//栈内存
//ST001:GEC-SC:HP001
//ST002:faEC-SC:HP003
//ST003:
//ST004:
//ST005:
//ST006:
//ST007:
//
//
////堆内存
//HP001:GEC-SC: [HP002-(GO)](1)
//HP002:GO:     {this:window, g:'g', fa: function {[HP002-(GO)]}}(3)
//HP003:faEC-SC:[HP002-(GO), HP004-(fa-AO)](1)
//HP004:fa-AO:  {this:window, a:'a', fb: function {[HP002-(GO), HP004-(fa-AO)]}}(2)
//HP005:fbEC-SC [HP002-(GO), HP004-(fa-AO), HP006-(fb-AO)](1)
//HP006:fb-AO:  {this:window, b:'b'}(1)
//HP007:
//HP008:
//HP009:

//函数多次调用时，是产生相同的AO还是不同的AO？ 
//产生不同的AO
//function fa(){
//	console.log(a);
//	var a = 100;
//	a++;
//}
//fa();
//fa();
//fa();

//栈内存
//ST001:GEC-SC:HP001
//ST002:
//ST003:
//ST004:
//ST005:
//ST006:
//ST007:
//
//
////堆内存
//HP001:GEC-SC: [HP002-(GO)](1)
//HP002:GO:     {this:window, fa: function {[HP002-(GO)]}}(1)
//HP003:
//HP004:
//HP005:
//HP006:
//HP007:
//HP008:
//HP009:

//1:43:09 23