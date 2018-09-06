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
