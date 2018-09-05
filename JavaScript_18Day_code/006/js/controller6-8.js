// 栈的应用

// 四则运算式，先乘除后加减
// 数0~9，+—*/，没有括号
//1+2+3+4
//2*3*4*5
//1*2+3*4/2-4/2
var x = '1*2+3*4/2-4/2';
var OPERATOR = [['+',0],['-',0],['*',1],['/',1]];

function run(x){
	var nArray = [];
	var oArray = [];
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
			// ----validate the operator && get the priority
			nPriority = validateOperator(sPToken);
			if(typeof(nPriority) != 'number'){
				iRet = nPriority + 'at position ' + i;
				break;
			}
			// get the second number
			sNToken = x.charCodeAt(i+1) - 48;
			if(sNToken < 0 || sNToken > 9){
				iRet = 'Error at position ' + (i + 1) + ' : is not a number(' + x.charAt(i + 1) + ')! Are you kidding me?';
				break;
			}
			
			// compare the priority of the operatore
			(typeof(iRet=stackOut(oArray,nArray,false,nPriority)) == 'string')?true:iRet = '';
			
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
		(typeof(iRet=stackOut(oArray,nArray,true)) == 'string')?true:iRet = '';
		
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

function stackOut(oArray,nArray,bIsNotCareAboutPriority,nPriority){
	var iRet = '';
	while(oArray.length != 0 && (bIsNotCareAboutPriority || oArray[oArray.length-1][1] >= nPriority)){
		// 弹栈计算
		var n;
		var n2 = nArray.pop();
		var n1 = nArray.pop();
		var op = oArray.pop()[0];
		
		n = calculate(op,n1,n2);
		
		if(typeof(n) != 'number'){
			iRet = n;
			break;
		}else{
			nArray.push(n);
		}
    }
	return (iRet == '')?true:iRet;  
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

function validateOperator(sPToken){
	var iRet = '';
	for(var j = 0; j < OPERATOR.length; j++){
		if(OPERATOR[j][0] == sPToken){
			break;
		}
	}
	if(j >= OPERATOR.length){
		iRet = 'Error : Syntax error: invalid operator \'' + sPToken + '\'';
	}
	
	return (iRet == '')?OPERATOR[j][1]:iRet;
}

console.log(run(x));

