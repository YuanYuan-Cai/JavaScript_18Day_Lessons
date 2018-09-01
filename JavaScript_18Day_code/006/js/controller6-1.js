// 函数的定义
// 函数的作用是：把过程封装起来的过程

// 功能，就是把数组求和

var x = [1,2,3,4,5,null,undefined,'abc'];
// 所给参数不符合要求的处理办法：
// 第一，发现不合格拒绝服务，保证自己的代码不崩溃。
// 第二，发现不合格，把合格部分处理，返回。

var iRet = 0;

for(var i = 0;i < x.length;i++){
	if(typeof(x[i]) == 'number'){
		if(!isNaN(x[i]) && isFinite(x[i])){
			iRet += x[i];
		}
	}
}
console.log(iRet);

//函数的声明
//function <函数名>([<形式上的参数>]){
//	// 函数体
//}
// 函数可以有形参，也可以没有
// 函数可以有返回，也可以没有，没有时候返回undefined
function sum(arr){
	var iRet = 0;

	for(var i = 0;i < arr.length;i++){
		if(typeof(arr[i]) == 'number'){
			if(!isNaN(arr[i]) && isFinite(arr[i])){
				iRet += arr[i];
			}
		}
	}
	//console.log(iRet);
	return iRet;
}

console.log(sum(x));

// 12345-》54321,用函数实现

function reverseNumber(num){
	if(typeof num != 'number'){
		return '';
	}
	if(!isFinite(num)||isNaN(num)){
		return '';
	}
	var tmp = num.toString().split('').reverse().join('');
//	console.log(tmp);
//	tmp = tmp.reverse();
//	tmp = tmp.join('');
	return +tmp;
}
console.log(reverseNumber(12345));