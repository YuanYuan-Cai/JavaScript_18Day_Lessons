//转换成字符串成

//隐式
//var sToken = '' + 2;
//console.log('[隐式类型转换] ' +  typeof(sToken));
//
//sToken = '' + null;
//console.log('[隐式类型转换] ' +  typeof(sToken));
//
//sToken = ''+ undefined;
//console.log('[隐式类型转换] ' +  typeof(sToken));
//
//sToken = '' + true
//console.log('[隐式类型转换] ' +  typeof(sToken));

//显示
//String()
//var sToken = String(2);
//console.log('[String] ' +  typeof(sToken) + ' ' + sToken);
//
//sToken = String(null);
//console.log('[String] ' +  typeof(sToken) + ' ' + sToken);
//
//sToken = String(undefined);
//console.log('[String] ' +  typeof(sToken) + ' ' + sToken);
//
//sToken = String(true);
//console.log('[String] ' +  typeof(sToken) + ' ' + sToken);
//
////toString()
//var iNum03 = 80;
//sToken = iNum03.toString();//80.toString();
//console.log('[String] ' +  typeof(sToken) + ' ' + sToken);

//sToken = iNum03.toString(16);//十六进制
//console.log('[String] ' +  typeof(sToken) + ' ' + sToken);
//
//sToken = true.toString();
//console.log('[String] ' +  typeof(sToken) + ' ' + sToken);
//
//sToken = null.toString();//不可以
//console.log('[String] ' +  typeof(sToken) + ' ' + sToken);
//
//sToken = undefined.toString();//不可以
//console.log('[String] ' +  typeof(sToken) + ' ' + sToken);

//如有有一个二进制的字符串，怎么变成十六进制的字符串
var sString = '10101001';
var nNum = parseInt(sString,2);
if(!isNaN(nNum)){
	console.log(nNum.toString(16));
}

