// 显示相关

function f(){
	console.log('点我干嘛？你闲的啊？');
}

$(function(){
	$('#show').click(function(){
		$('p:eq(0)').show(2000, f);
	});
	
	$('#hide').click(function(){
		$('p:eq(0)').hide(2000, f);
	});
	
	$('#toggle').click(function(){
		$('p:eq(0)').toggle(2000, f);
	});
	
	$('#fadein').click(function(){
		$('p:eq(0)').fadeIn(2000, f);
	});
	
	$('#fadeout').click(function(){
		$('p:eq(0)').fadeOut(2000, f);
	});
	
	$('#fadetoggle').click(function(){
		$('p:eq(0)').fadeToggle(2000, f);
	});
	
	$('#slidedown').click(function(){
		$('p:eq(0)').slideDown(2000, f);
	});
	
	$('#slideup').click(function(){
		$('p:eq(0)').slideUp(2000, f);
	});
	
	$('#slidetoggle').click(function(){
		$('p:eq(0)').slideToggle(2000, f);
	});
});
