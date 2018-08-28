//栈的应用

// 四则运算式，先乘除后加减
// 数0~9，+-*/，没有括号
var x = '2 + 3 * 5 - 4';
// 1,算法思路
//  低优先级操作符遇到其右高优先级操作符，右侧优先运算----1
//  相同优先级的操作符，左侧优先                                  -------2
//  高优先级操作符遇到其右低优先级操作符，左侧优先计算----3
//1+2+3 (2)
//3+3
//6
//
//1+2*3 (3)
//1+6
//7
//
//2+3*5-4 (1)
//2+15-4  (2)
//17-4    (2)
//13     
//
//对于每一个操作符,只有后面的操作符的优先级,高于当前操作符,遵循1原则,等待
//                               等于,低于,遵循2原则,直接计算.

// 2,软件工程思路
//2.1 测试用例,产生有限但是有效的测试用例
//2+3*5-4
//1+2+3
//2*3*4*5
//1*2+3*4/5-4/2
//1+2
//2*3
//2.2 要有debug的工具和手段,Debug工具,或者log

// 栈，push-pop
var nArray = [];
var oArray = [];

var OPERATOR = [['+',0],['-',0],['*',0],['/',0]]

var nRet = 0;
var iRet = '';
var i = 0;// pointer to current op

// first number
var sNToken = x.charCodeAt(i) -48;
var sPToken = ''; 
// '0' 30h 48 '9' 39h 57
if(sNToken < 0 || sNToken > 9){
	iRet = 'Error at position' + i + 'is not a number! Are you kidding me?';	
}else{
	nArray.push(sNToken);
	i = 1;
	for(;i < x.length;){
		//get the operator
		sPToken = x.charAt(i);
		// validate the operator
		foe(var j = 0;j < OPERATOR.length;j++){
			if(OPERATOR[j][0] == sPToken){
				break;
			}
		}
		if(j >= OPERATOR.length){
			iRet = 'Error at position' + i + ':Syntax error:invalid operator \'' + sPToken + '\'';
			break;
		}
		
		// get the priority
		
		
		// get the second number
		sNToken = x.charCodeAt(i+1) - 48;
		
		// compare the priority of the operatore
		break;//-------------to be delete ----------
		
	}

}

// check;
if(iRet != ''){
	//Error happens
}
//11集 13:14