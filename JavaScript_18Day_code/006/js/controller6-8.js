// 栈的应用

// 四则运算式，先乘除后加减
// 数0~9，+—*/，没有括号
//1+2+3+4
//2*3*4*5
//1*2+3*4/2-4/2
var x = '1*2+3*4/2-4/2';


function run(x){
	var nArray = [];
	var oArray = [];
	
	var cl = 5; //--------------------------to be deleted--------------
	
	var OPERATOR = [['+',0],['-',0],['*',1],['/',1]];
	
	var nRet = 0;
	var iRet = '';
	var i = 0; // pointer to current op
	
	// first number
	var sNToken = x.charCodeAt(i) - 48;
	var sPToken = '';
	var nPriority = 0;
	
	//'0' 30h 48  '9' 39h 57
	if(sNToken < 0 || sNToken > 9){
		iRet = 'Error at position ' + i + ' : is not a number(' + x.charAt(i) + ')! Are you kidding me?';
	}else{
		nArray.push(sNToken);
		i = 1;
		for(;i < x.length;){
			// get the operator
			sPToken = x.charAt(i);
			// ----validate the operator
			for(var j = 0; j < OPERATOR.length; j++){
				if(OPERATOR[j][0] == sPToken){
					break;
				}
			}
			if(j >= OPERATOR.length){
				iRet = 'Error at position ' + i + ' : Syntax error: invalid operator \'' + sPToken + '\'';
				break;
			}
			// ----get the priority
			nPriority = OPERATOR[j][1];
			
			// get the second number
			sNToken = x.charCodeAt(i+1) - 48;
			if(sNToken < 0 || sNToken > 9){
				iRet = 'Error at position ' + (i + 1) + ' : is not a number(' + x.charAt(i + 1) + ')! Are you kidding me?';
				break;
			}
			
			// compare the priority of the operatore
			
			while(oArray.length != 0 && oArray[oArray.length-1][1] >= nPriority){
				// 弹栈计算
				var n;
				var n2 = nArray.pop();
				var n1 = nArray.pop();
				var op = oArray.pop()[0];
				
				n = calculate(op,n1,n2);
				
				if(typeof(n) != 'number'){
					break;
				}else{
					nArray.push(n);
				}
			}
			
			if(iRet){
				break;
			}
			
			// 压栈
			nArray.push(sNToken);
			var opPair = [];
			opPair[0] = sPToken;
			opPair[1] = nPriority;
			
			oArray.push(opPair);
			i += 2;
		}
		while(oArray.length != 0){
			// 弹栈计算
			var n;
			var n2 = nArray.pop();
			var n1 = nArray.pop();
			var op = oArray.pop()[0];
			
			n = calculate(op,n1,n2);
			
			if(typeof(n) != 'number'){
				break;
			}else{
				nArray.push(n);
			}
		}
	}
	
	// check;
	if(iRet){
		console.log(iRet);
		// Error happens.---------------------to be added------------------------
	}else{
		nRet = nArray.pop();
	}

	return nRet;
}

function calculate(op,n1,n2){
	var n;
	var iRet = '';
	switch(op){
		case '+':
			n = n1 + n2;
			break;
		case '-':
			n = n1 - n2;
			break;
		case '*':
			n = n1 * n2;
			break;
		case '/':
			n = n1 / n2;
			break;
		default:
		    iRet = 'Error in calculate!' + op;
			console.log(iRet);
			break;
		}
	    if(iRet != '' &&(!isFinite(n) || isNaN(n))){
			 iRet = 'Error, the result is invalid!';
		}
	    return (iRet == '')?n:iRet; 
	
}
console.log(run(x));
