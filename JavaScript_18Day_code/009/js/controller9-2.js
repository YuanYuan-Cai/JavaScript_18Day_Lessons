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

function add(){
	var count = 0;
	function addAction(){
		count++;
		console.log(count);
		return count;
	}
	return addAction;
}

var myAdd = add();
myAdd();
myAdd();
myAdd();