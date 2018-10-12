// 事件委托

var ul = document.getElementById('uid');

//ul.addEventListener('click', function(e){
//	e = e || window.event;
//	
//	var target = e.target || e.srcElement;
//	target.innerHTML = target.innerHTML + 'click';
//	
//	console.log(target.innerHTML);
//	console.log(target);
//	
//	
//}, false);

var lis = ul.getElementsByTagName('li');
for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener('click', function(){
		this.innerHTML += 'click';
		console.log(this.innerHTML);
	}, false);
}
