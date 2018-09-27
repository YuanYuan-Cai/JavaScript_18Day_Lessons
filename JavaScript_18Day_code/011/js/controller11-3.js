// 练习2，做一个可以伸长的div

// hardcode:所有的常数都是通过直接在代码中“硬写”。
//          后果：一旦需要修改，所有的地方必须同时修改。人类很有可能会漏改。

// 1. 调通 demo
// 2. 改善

// div的最长长度或者高度
var MAX = 400;
// div的最短或者最矮高度
var EDGE = 20;
// 从EDGE到MAX的长度
var LENGTH = MAX - EDGE;
// 动画刷新的时间间隔（毫秒）
var INTERVAL = 20;
// 从EDGE涨到MAX，或者从MAX小到EDGE的时间（毫秒）
var PERIOD = 1000;
// 每次时间间隔应该延长或者缩短的距离
var SPEED = Math.floor((LENGTH / PERIOD) * INTERVAL); 

// 顶部，变长阶段
function startLongerTop(){
	var div = document.getElementById('divid');
	var width = Number.parseInt(div.style.width);
	
	if(isNaN(width))return;
	
	if(width < MAX){
		width += SPEED;
		div.style.width = width + 'px';
		setTimeout('startLongerTop()', INTERVAL);
	}else{
		div.style.width = MAX + 'px';
		setTimeout('startShorterTop()', INTERVAL);
	}	
}
// 顶部，变短阶段
function startShorterTop(){
	var div = document.getElementById('divid');
	var width = Number.parseInt(div.style.width);
	
	if(isNaN(width))return;
	
	if(width > EDGE){
		width -= SPEED;
		div.style.width = width + 'px';
		div.style.left = (MAX - width) + 'px';
		setTimeout('startShorterTop()', INTERVAL);
	}else{
		div.style.width = EDGE + 'px';
		div.style.left = LENGTH + 'px';
		setTimeout('startLongerRight()', INTERVAL);
	}	
}
// 右部，变长阶段
function startLongerRight(){
	var div = document.getElementById('divid');
	var height = Number.parseInt(div.style.height);
	
	if(isNaN(height))return;
	
	if(height < MAX){
		height += SPEED;
		div.style.height = height + 'px';
		setTimeout('startLongerRight()', INTERVAL);
	}else{
		div.style.height = MAX + 'px';
		setTimeout('startShorterRight()', INTERVAL);
	}	
}
// 右部，变短阶段
function startShorterRight(){
	var div = document.getElementById('divid');
	var height = Number.parseInt(div.style.height);
	
	if(isNaN(height))return;
	
	if(height > EDGE){
		height -= SPEED;
		div.style.height = height + 'px';
		div.style.top = (MAX - height) + 'px';
		setTimeout('startShorterRight()', INTERVAL);
	}else{
		div.style.height = EDGE + 'px';
		div.style.top = LENGTH + 'px';
		setTimeout('startLongerBottom()', INTERVAL);
	}	
}

// 底部，变长阶段
function startLongerBottom(){
	var div = document.getElementById('divid');
	var width = Number.parseInt(div.style.width);
	
	if(isNaN(width))return;
	
	if(width < MAX){
		width += SPEED;
		div.style.width = width + 'px';
		div.style.left = (MAX - width) + 'px';
		setTimeout('startLongerBottom()', INTERVAL);
	}else{
		div.style.width = MAX + 'px';
		div.style.left = '0px';
		setTimeout('startShorterBottom()', INTERVAL);
	}	
}
// 底部，变短阶段
function startShorterBottom(){
	var div = document.getElementById('divid');
	var width = Number.parseInt(div.style.width);
	
	if(isNaN(width))return;
	
	if(width > EDGE){
		width -= SPEED;
		div.style.width = width + 'px';
		setTimeout('startShorterBottom()', INTERVAL);
	}else{
		div.style.width = EDGE + 'px';
		setTimeout('startLongerLeft()', INTERVAL);
	}	
}

// 左部，变长阶段
function startLongerLeft(){
	var div = document.getElementById('divid');
	var height = Number.parseInt(div.style.height);
	
	if(isNaN(height))return;
	
	if(height < MAX){
		height += SPEED;
		div.style.height = height + 'px';
		div.style.top = (MAX - height) + 'px';
		setTimeout('startLongerLeft()', INTERVAL);
	}else{
		div.style.height = MAX + 'px';
		div.style.top = '0px';
		setTimeout('startShorterLeft()', INTERVAL);
	}	
}
// 左部，变短阶段
function startShorterLeft(){
	var div = document.getElementById('divid');
	var height = Number.parseInt(div.style.height);
	
	if(isNaN(height))return;
	
	if(height > EDGE){
		height -= SPEED;
		div.style.height = height + 'px';
		setTimeout('startShorterLeft()', INTERVAL);
	}else{
		div.style.height = EDGE + 'px';
		setTimeout('startLongerTop()', INTERVAL);
	}	
}

setTimeout('startLongerTop()', INTERVAL);
