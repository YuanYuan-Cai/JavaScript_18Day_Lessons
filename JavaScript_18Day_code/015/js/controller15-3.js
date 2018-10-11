// 冒泡和捕获

var dg = document.getElementsByClassName('clsg')[0];
var df = document.getElementsByClassName('clsf')[0];
var ds = document.getElementsByClassName('clss')[0];

df.addEventListener('click',function(){
	console.log('df click 冒泡');
},false);

dg.addEventListener('click',function(){
	console.log('dg click 冒泡');
},false);

ds.addEventListener('click',function(){
	console.log('ds click 捕获');
},true);

ds.addEventListener('click',function(){
	console.log('ds click 冒泡');
},false);

//document.body.addEventListener('click', function(){
//	console.log('body click 冒泡');
//},false);



df.addEventListener('click',function(){
	console.log('df click 捕获');
},true);

dg.addEventListener('click',function(){
	console.log('dg click 捕获');
},true);

