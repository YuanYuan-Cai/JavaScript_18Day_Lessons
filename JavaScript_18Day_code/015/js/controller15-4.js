// 冒泡的取消

var dg = document.getElementsByClassName('clsg')[0];
var df = document.getElementsByClassName('clsf')[0];
var ds = document.getElementsByClassName('clss')[0];

//ds.addEventListener('click', function(e){
//	console.log('ds click 冒泡');
//	e = e || window.event;
//	
////	if(e.stopPropagation){
////		e.stopPropagation();
////	}else{// for IE
////		e.cancelBubble = true;
////	}
//}, false);
//
//df.addEventListener('click', function(e){
//	console.log('df click 冒泡');
//	e = e || window.event;// IE
//	var target = e.target || e.srcElement; // IE
//	console.log(target);
//}, false);

// 阻止默认事件
// 1. return false;
//document.oncontextmenu = function(e){
//	//e = e || window.event;
//	console.log('right click');
//	return false;
//};

// 2. e.stopPropagation()

//document.addEventListener('contextmenu', function(e){
//	console.log('addEventListener contextmune');
//	
//	e = e || window.event;
//	if(e.preventDefault){
//		e.preventDefault();
//	}else{
//		e.returnValue = false;
//	}
//}, false);

var a = document.getElementById('aid');
a.addEventListener('click', function(e){
	console.log('addEventListener click');
	e = e || window.event;
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}, false);
