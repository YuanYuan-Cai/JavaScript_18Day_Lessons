// 窗口操作

// close() 关闭
// moveTo() 移动
// resizeTo() 调整窗口大小

var myWindow = window.open('','','width=200,height=100');
myWindow.document.write('Hello，我在这里！');

function closeWin(){
	myWindow.close();
}

function moveWin(){
	myWindow.moveTo(200,400);
	myWindow.focus();
}

function resizeWin(){
	myWindow.resizeTo(500,300);
	myWindow.focus();
}


