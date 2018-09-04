// 形参和实参
// 形参和实参是不一样的，数量，类型都可以不一样，JS engine 不关心
// 形参和是实参会绑定，动态关联。

//function foo(a,b,c){//a,b,c是形参
//	console.log(foo.length);
//	console.log(arguments);//arguments是实参数组
//	arguments[0] = -1;
//	console.log(a);
//	arguments[1] = 2;
//	console.log(b);
//}
//
//foo(1);
//console.log('----------------------------------')
//foo(1,2,3,4,5,6);

//递归
function foo(i){
	if(i < 0) return;
	console.log('begin:' + i);
	foo(i-1);
	console.log('end:' +i);
}
foo(2);

////栈内存
//ST001:
//ST002:
//ST003:
//ST004:
//ST005:
//ST006:
//
////堆内存
//HP001:
//HP002:
//HP003:
//HP004:

// 递归的例子
// 有一行台阶，阶数为N,我们可以一次走1步，2步，3步，一共有多少种走法
//function step(n){
//	switch(n){
//		case 1:
//			return 1;
//			break;
//		case 2:
//			return 2;
//			break;
//		case 3:
//			return 4;
//			break;
//		default:
//			return step(n-3)+step(n-2)+step(n-1);
//			break;
//	}
//	return '';
//}
//
//console.log(step(5));//13

//step(1):1
//step(2):2
//step(3):1+step(2)+step(1)=4
//step(4):step(3)+step(2)+step(1)=7
//...
//step(n):step(n-3)+step(n-2)+step(n-1)

//汉诺塔

function doHanoi(n,src,dest,hpr){// src:源 dest：目的 hpr：辅助
	if(n > 1){
		doHanoi(n-1,src,hpr,dest);
		console.log('Move No.' + n + 'dish from ' + src + 'to' + dest);
		doHanoi(n-1,hpr,dest,src);
	}else if(n == 1){
		console.log('Move No.' + n + 'dish from ' + src + 'to' + dest);
	}else{
		console.log('Error');
	}
	
}

doHanoi(4,'A','B','C');

