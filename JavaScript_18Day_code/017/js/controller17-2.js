// Jquery 事件

// onload  vs.  ready()
// onload和ready()不可以混用
// ready的三种写法：
// 1.
//$(document).ready(function(){
//	console.log('ready 1');
//});
// 2.
//$().ready(function(){
//	console.log('ready 2');
//});
//// 3.
$(function(){
	console.log('ready 3');
	
//	$('div:first').click(function(){
//		console.log('div click');
//	});
//	
//	$('div:eq(0)').dblclick(function(){
//		console.log('div double click');
//	});

//	$('div:first').mouseenter(function(){
//		console.log('div mouseenter');
//	});
//	
//	$('div:first').mouseleave(function(){
//		console.log('div mouseleave');
//	});
//	
//	$('div:first').hover(
//		function(){
//			$(this).css('background-color', 'red');
//		},
//		function(){
//			$(this).css('background-color', 'green');
//		}
//	);

//	$(':button:first').focus(function(){
//		$(this).css('background','red');
//	});
//	
//	$(':button:first').blur(function(){
//		$(this).css('background', 'white');
//	});

// bind: 1,可以用更加优雅的方式给一个元素绑定多个事件，以Object的方式。
//	$(':button:first').bind({
//		focus: function(){
//			$(this).css('background','red');
//		},
//		blur: function(){
//			$(this).css('background', 'white');
//		},
//	});
// bind: 2,可以用于传递参数。
//	function handler(e){
//		console.log(e.data.msg);
//	}
//	
//	$(':button:first').bind('focus', {msg: 'hello'}, handler);

//	$(':button:first').keydown(function(e){
//		var keys = e.which;
//		console.log('keydown ' + keys);
//	});
//	
//	$(':button:first').keyup(function(e){
//		var keys = e.which;
//		console.log('keyup ' + keys);
//	});
//	
//	$(':button:first').keypress(function(e){
//		var keys = e.which;
//		console.log('keypress ' + keys);
//	});

//	$('div').delegate('p','click', function(event){
//		console.log(event.target);
//	});

//  on -> bind, delegate
// on -> bind: 1,可以用更加优雅的方式给一个元素绑定多个事件，以Object的方式。
//	$(':button:first').on({
//		focus: function(){
//			$(this).css('background','red');
//		},
//		blur: function(){
//			$(this).css('background', 'white');
//		},
//	});
// on -> bind: 2,可以用于传递参数。
//	function handler(e){
//		console.log(e.data.msg);
//	}
//	
//	$(':button:first').on('focus', {msg: 'hello'}, handler);
// on -> delegate
//	$('div').on('click','p', function(event){
//		console.log(event.target);
//	});
});

// .live() .die() .size() .toggle() 不用了
