// Jquery DOM 元素的添加和删除

// 元素的添加和删除
// append()在被选元素的结尾插入内容，作为子元素
// perpend()在被选元素的开头插入内容，作为子元素
// after()在被选元素之后插入内容，作为同级元素
// before()在被选元素之前插入内容，作为统计元素

// 创建元素，三种方法：
// 1.HTML
var txt1 = '<p>p1</p>';
// 2.Jquery
var txt2 = $('<p></p>').text('p2');
// 3.JS原生
var txt3 = document.createElement('p');
txt3.innerHTML = 'p3';

var txt4 = '<p>p4</p>';

$('div:eq(1)').after(txt1);
$('div:eq(1)').before(txt2);
$('div:eq(1)').append(txt3);
$('div:eq(1)').prepend(txt4);


// remove() 自杀，自己杀死自己
//$('p:contains(p1)').remove();
//$('p').remove(':contains(p1)');

// empty() 父亲杀死儿子
//$('div:eq(1)').empty();


// CSS 操作
// addClass
//$('p:contains(p1)').addClass('cls1');
//
//// removeClass
//$('p:contains(p1)').removeClass('cls1');
//
//$('button').click(function(){
//	$('p:contains(p2)').toggleClass('cls1');
//});

// css
// 操作一个：
//$('p:contains(p1)').css('background-color', 'green');

// 操作多个：
//$('p:contains(p2)').css('background-color', 'red').css('color', 'green');
//$('p:contains(p2)').css({
//	'background-color': 'red',
//	'color': 'green'
//});
