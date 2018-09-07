//JavaScript引擎的三大步骤：
//预编译（第一次\前置扫描）
//解释执行（第二次扫描）
//预编译-脚本
//- 脚本
//	- 创建全局对象GO(window)(上下文)
//	- 加载脚本文件
//	- 预编译:
//		- 找出所有的变量声明,按照变量名加入全局对象,如果已经存在,忽略
//		- 找出所有的函数声明,按照函数声明加入全局对象,如果已经存在同名变量或者函数,替换
//		- 非声明不予理睬
//	- 解释执行

//脚本的预编译

// 1,没有var的变量，全部认为是window的全局变量，不参与预编译
//console.log(aa);//报错
//aa = 5;
//console.log(aa);

//console.log(aa);//undefined
//var aa = 5;
//console.log(aa);//5

// 2,即使在函数中，aa也是全局变量,
// 是【运行时】，不是定义时

//function test(){
//	a = 5;
//}
//console.log(a);//报错
//
//test();
//function test(){
//	a = 5;
//}
//console.log(a);//5

// 3,脚本中所有变量声明，在脚本的预编译阶段完成,所有变量的声明与实际书写的位置无关
//console.log(aa);//undefined
//var aa = 5;
//console.log(aa);//5

//4,在脚本中，所有的函数声明，在脚本的预编译阶段完成，所有函数的声明与实际的书写位置无关
//console.log(haha);
//function haha(){
//	console.log('h1');
//}

//5,在脚本中，预编译中如果变量与函数同名，那么，函数将覆盖变量
//console.log(haha);
//var haha = 123;
//function haha(){
//	console.log('h1');
//}

//6,在脚本中，预编译中只有函数能够覆盖变量，变量无法覆盖函数
//console.log(haha);
//function haha(){
//	console.log('h1');
//}
//var haha = 123;

//7,在脚本中，预编译中后面的函数声明会覆盖前面的函数声明，并且，忽略参数
//console.log(haha(1));
//console.log(haha);
//function haha(a){
//	console.log('haha1');
//}
//function haha(a,b){
//	console.log('haha2');
//}


