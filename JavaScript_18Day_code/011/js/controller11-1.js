// Date对象
// 1，如何获得当前时间

var d1 = new Date();
//console.log(d1);
//
//// 2,数：1970年1月1日到现在的毫秒数
//console.log(d1.getTime());
//
//var x = d1.getTime();
//x = x / (1000 * 3600 * 24 * 365);
//console.log(x);

// 3, setFullYear, 月份设定 0~11，其他不变
//d1.setFullYear(2017,4,1);
//console.log(d1);

// 4,有参数的构造函数
//var d2 = new Date(2017,4,1);
//console.log(d2);

// 5,GMT 格林尼治时间；UTC 协调世界时间
//console.log(d1.toUTCString());
//console.log(d1.toGMTString());

// 6，设定年setFullYear，getFullYear
//d1.setFullYear(2015);
//console.log(d1);
//d1.setFullYear(d1.getFullYear() + 1);
//console.log(d1);

// 7,设定月 0~11(记得加1)
//console.log(d1.getMonth() + 1);

// 8，设定日（是几就是几）
//console.log(d1.getDate());

// 9，设定星期几 0：星期日，1~6：周一~周六
//console.log(d1.getDay());
//
//// 10,获得毫秒数
//var haomiaoshu = Date.parse(d1.toString());
//console.log(haomiaoshu);

// 11，Date 克隆
//var d4 = new Date(d1);
//console.log(d4);

// 12,比较
//var d5 = new Date(2018,0,1);
//var d6 = new Date(2017,0,1);
//console.log((d5 - d6)/(1000 * 3600 * 24));

// 练习1，做一个钟表
var timer;

function startTime(){
	var today = new Date();
	var h = to2bit(today.getHours());
	var m = to2bit(today.getMinutes());
	var s = to2bit(today.getSeconds());
	
	var div = document.getElementById('txt');
	div.innerHTML = h + ':' + m + ':' + s;
	timer = setTimeout('startTime()',20);
}
function stopTime(){
	clearTimeout(timer);
}
function to2bit(num){
	if(num < 10){
		return '0' + num;
	}else{
		return '' + num;
	}
}

timer = setTimeout('startTime()',20);
