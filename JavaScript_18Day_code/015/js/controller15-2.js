// 事件解绑定

//onTYPE
var d = document.getElementById('theD');
//
//d.onclick = function(){
//	console.log('我被点击了！！！！');
//}
//
//var ipt = document.getElementsByTagName('input')[0];
//ipt.onclick = function(){
//	d.onclick = null;
//}

d.addEventListener('click', divclick, false);

function divclick(){
	console.log('我又被点击了，好惨！');
}

var ipt = document.getElementsByTagName('input')[0];
ipt.addEventListener('click', function(){
	d.removeEventListener('click', divclick, false);
},false);

// IE: detachEvent('on' + type, func)
