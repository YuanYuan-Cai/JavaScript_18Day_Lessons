//for

////0~19
//for(var i = 0;i < 20;i++){
////	document.write('[for]' + i +'<br />');
//}
//
//var i = 0;
//for(;i<20;){
////	document.write('[for]' + i +'<br />');
//	i++;
//}
//
////do while
//i = 0;
//do{
////	document.write('[while]' + i +'<br />');
//}while(i < 20)
//
////while
//i = 0;
//while(i < 20){
////	document.write('[while]' + i +'<br />');
//	i++;
//}

//break与continue
//var i = 0;
//while(i < 20){
//	if(i == 10){
//		break;
//	}
//	document.write('[break]' + i +'<br />');
//	i++;
//}
//
//document.write('-------------[continue]------------<br />');
//
//i = 0;
//while(i < 20){
//	if(i == 10){
//		i++;
//		continue;
//	}
//	document.write('[continue]' + i +'<br />');
//	i++;
//}

//代码的三种结构
//所有的代码逻辑，都可以分解成顺序、条件和循环这三种基 本结构的任意组合。 

//50000以内找到前5个满足:除以7余5,除以13余7,除以17余13
//var b1 = false;
//var b2 = false;
//var b3 = false;
//var count = 0;
//for(var i = 1;i <= 50000;i++){
////	b1 = false;
////	b2 = false;
////	b3 = false;
////	if(){
////		b1 = true;
////	}
////	if(){
////		b2 = true;
////	}
////	if(){
////		b3 = true;
////	}
//	
//	if(i % 7 == 5 && i % 13 == 7 && i % 17 == 13){
//		document.write('[50000以内]'+ i +'<br />');
//		count++;
//		if(count >= 5){
//		break;
//	    }
//	}
//
//}
//
////计算阶乘 10！=10*9*8*7*6*5*4*3*2*1
//var iRet = 1;
//var n = 1000;
//for(var i = n;i >= 1;i--){
//	if(isFinite(iRet)){
//		iRet *= i;
//	}else{
//		//document.write('[阶乘] break <br />');
//		break;
//	}
//	
//}
//document.write('[阶乘]' + iRet + '<br />');
//
////再次改
//var iRet = 1;
//var n = 1000;
//for(var i = n;i >= 1;i--){
//	if(!isFinite(iRet)){
//		document.write('[阶乘] break <br />');
//		break;
//	}
//	iRet *= i;
//	
//}
//document.write('[阶乘]' + iRet + '<br />');

//1累加到100
//var iRet = 0;
//var n = 1E8;//需要限制n的大小
//for(var i = 1;i <= n;i++){
//	if(!isFinite(iRet)){
//		break;
//	}
//	iRet += i;
//}
//document.write('[累加]'+ iRet + '<br />');

//5的n次幂
var iRet = 1;
var n = 10;
var di = 5;
for(var i = 0;i < n;i++){
	if(!isFinite(iRet)){
		break;
	}
	iRet *= di;
}
document.write('[n次幂]' + iRet + '<br />');

//代码写出来后，运行成功后，一定要记住【优化】
