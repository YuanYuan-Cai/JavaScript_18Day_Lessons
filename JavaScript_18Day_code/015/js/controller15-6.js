// 如何实现div的拖拽

// 1. mousedown: 确定鼠标相对于div的位置
// 2. 当鼠标移动时（左键不起来），mousemove， 需要通过程序保证div相对于鼠标的位置不变，实现“拿住了”的效果。
// 3. 当鼠标抬起时，mouseup，放下div

function bindEvent(obj){
	if(typeof(obj) == 'string'){
		obj = document.getElementById(obj);
	}
	
	obj.oIndex = obj.style.zIndex; // 先保存obj的当前zindex
	console.log(obj.oIndex);
	
	
	
	obj.addEventListener('mousedown', function(e){
		e = e || window.event;
		obj.style.zindex = 1000;
		obj.style.cursor = 'move';
		
		// 计算x,y，是鼠标相对于div的位置
		// e.clientX 是鼠标相对于屏幕上角的位置
		// obj.offsetLeft是div相对于body上角的位置
		var x = e.clientX - obj.offsetLeft;
		var y = e.clientY - obj.offsetTop;
		
		console.log(x + '-' + y);
		
		function whenMouseMove(e){
			e = e || window.event;
			
			obj.style.left = e.clientX - x + 'px';
			obj.style.top = e.clientY - y + 'px';
		}
		
		document.addEventListener('mousemove', whenMouseMove, false);
		
		function whenMouseUp(){
			document.removeEventListener('mousemove', whenMouseMove, false);
			document.removeEventListener('mouseup', whenMouseUp, false);
			obj.style.zIndex = obj.oIndex;
			obj.style.cursor = 'normal';
		}
		
		document.addEventListener('mouseup', whenMouseUp, false);
	}, false);	
}


bindEvent('div1');
bindEvent('div2');
