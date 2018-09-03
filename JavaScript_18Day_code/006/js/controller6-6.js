// 形参和实参
// 形参和实参是不一样的，数量，类型都可以不一样，JS engine 不关心
// 形参和是实参会绑定，动态关联。

function foo(a,b,c){//a,b,c是形参
	console.log(foo.length);
	console.log(arguments);//arguments是实参数组
	arguments[0] = -1;
	console.log(a);
	arguments[1] = 2;
	console.log(b);
}

foo(1);
console.log('----------------------------------')
foo(1,2,3,4,5,6);

//26:00 第18
