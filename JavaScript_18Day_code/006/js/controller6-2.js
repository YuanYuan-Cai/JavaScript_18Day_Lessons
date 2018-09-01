// 函数表达式
// 函数：不是函数声明就是函数表达式。
// 只有按照声明方式写的叫函数声明，其他都叫函数表达式

//(function f(){})
//var f = function ff(){};
//ff(a,function fff(){},b);

//var f = function fact(x){
//	if(x <= 1){
//		return 1;
//	}else{
//		return x * fact(x-1);
//	}
//};
//console.log(f(5));

//f(5)
//5 * f(4)
//4 * f(3)
//    3 * f(2)
//        2 * f(1)
//             1

//函数表达式中函数可以没有名字，当调用函数自己时候，使用arguments.callee()
//var f = function(x){
//	if(x <= 1){
//		return 1;
//	}else{
//		return x * arguments.callee(x-1);
//	}
//};
//console.log(f(5));

//函数声明
//function reverseNumber(num){
//	if(typeof num != 'number'){
//		return '';
//	}
//	if(!isFinite(num)||isNaN(num)){
//		return '';
//	}
//	var tmp = num.toString().split('').reverse().join('');
//	return +tmp;
//}


