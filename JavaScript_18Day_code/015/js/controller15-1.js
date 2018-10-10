// 事件绑定

//onTYPE

var d = document.getElementById('theD');

//d.onclick = function(){
//	console.log('我被点击了，onclick');
//};
//
//d.onclick = function(){
//	console.log('我被点击了，onclick2');
//};

//addEventListener

//d.addEventListener('click', function(){
//	console.log('我被点击了，click');
//});
//
//d.addEventListener('click', function(){
//	console.log('我被点击了，click2');
//});

// 在IE里面，this -> window
// Chrome不支持。
//function divclick(){
//	console.log('我被点击了，div click');
//}
//
//
//d.attachEvent('onclick',function(){
//	divclick.call(d)
//});

// 练习：我们写一个可以同时兼容IE和Chrome点击函数
// 1.函数的方式：
//function addEvent(elmt, type, func){
//	if(elmt.addEventListener){
//		elmt.addEventListener(type, func, false);
//	}else if(elmt.attachEvent){ // IE 
//		elmt.attachEvent('on' + type, function(){
//			func.call(elmt);
//		});
//	}else{
//		elmt['on' + type] = func;
//	}
//}
//
//function divclick(){
//	console.log('我又被点击了');
//}
//
//addEvent(d, 'click', divclick);

// 2.Element.prototype

//Element.prototype.addEvent = function(type, func){
//	var elmt = this;
//	
//	if(elmt.addEventListener){
//		elmt.addEventListener(type, func, false);
//	}else if(elmt.attachEvent){
//		elmt.attachEvent('on' + type, function(){
//			func.call(elmt);
//		});
//	}else{
//		elmt['on' + type] = func;
//	}
//};
//
//function divclick(){
//	console.log(this);
//	console.log('天哪，我又被点击了！');
//}
//
//d.addEvent('click', divclick);






