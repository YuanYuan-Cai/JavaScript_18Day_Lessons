// 练习2，做一个可以伸长的div

// hardcode:所有的常数都是通过直接在代码中“硬写”。
//          后果：一旦需要修改，所有的地方必须同时修改。人类很有可能会漏改。

// 1. 调通 demo
// 2. 改善：用Jquery重写这个功能

// div的最长长度或者高度
var MAX = 400;
// div的最短或者最矮高度
var EDGE = 20;
// 从EDGE到MAX的长度
var LENGTH = MAX - EDGE;
// 从EDGE涨到MAX，或者从MAX小到EDGE的时间（毫秒）
var PERIOD = 3000;

var div = $('div#divid');

function startAnimation(){
	div.animate({width: MAX + 'px'}, PERIOD, 'linear');
	div.animate({width: EDGE +'px', left: LENGTH + 'px'}, PERIOD, 'linear');
	div.animate({height: MAX + 'px'}, PERIOD, 'linear');
	div.animate({height: EDGE +'px', top: LENGTH + 'px'}, PERIOD, 'linear');
	div.animate({width: MAX + 'px', left: '0px'}, PERIOD, 'linear');
	div.animate({width: EDGE +'px'}, PERIOD, 'linear');
	div.animate({height: MAX + 'px', top: '0px'}, PERIOD, 'linear');
	div.animate({height: EDGE +'px'}, PERIOD, 'linear', startAnimation);
}

startAnimation();

// 方法链。chaining
// 是一种jquery的技术，允许在相同的元素上运行多条jquery命令，一条接着一条
// 提示：这样的话，浏览器不必多次查询同一个元素。
// 如果需要链接一个动作，只需要简单的追加动作即可。

