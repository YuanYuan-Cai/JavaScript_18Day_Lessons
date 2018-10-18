// Jquery 选择器

// Jquery选择器允许对HTML元素组或者单个元素进行操作
// Jquery选择器基于di，类（class属性），类型（Tag），属性（Attr），属性值等进行查找或者选择HTML元素。
// Jquery是基于已有的CSS选择器，除此之外，他还自定义了一些选择器。
// Jquery中所有的选择器都已美元符号开头。

// 1. 基础选择器：
//   * 表示匹配所有
//$('*').css('background-color', 'red');
//   匹配标签
//$('div').css('background-color', 'red');
//   , 表示或
//$('div,p').css('background-color', 'red');
//   匹配id
//$('#id01,#id02').css('background-color', 'red');
//   匹配class
//$('.class01').css('background-color', 'red');
//$('.class01, .class02').css('background-color', 'red');

// 2. 层次选择器
//    直接或者间接后代选择
//$('div p').css('background-color', 'red');
//    直接后代选择
//$('span>p').css('background-color', 'red');
//    邻接或者不邻接的后续选择
//$('p~p').css('background-color', 'red');
//    邻接的后续选择
//$('p+p').css('background-color', 'red');

// 3. 基本过滤选择
//$('div:first').css('background-color', 'red');
//$('div:last').css('background-color', 'red');
//$('div:not(.class01)').css('background-color','red');
//$('div:not(.class02, .class01)').css('background-color', 'red');
//$('div:even').css('background-color', 'red');
//$('div:odd').css('background-color', 'green');
//$('div:eq(0)').css('background-color','blue');
//$('div:gt(2)').css('background-color', 'red');
//$('div:lt(2)').css('background-color', 'red');
//$(':header').css('background-color', 'red');

//function animateDiv(){
//	$('div:eq(0)').animate({width:'50%'},'slow');
//	$('div:eq(0)').animate({width:'100%'},'slow',animateDiv);
//}
//
//animateDiv();
//
//$(document).ready(function(){
//	$('#theB').click(function(){
//		$(':animated').css('background', 'yellow');
//	});
//});

//$('div:nth-child(3n+2)').css('background-color', 'red');
//$('div:nth-of-type(3n)').css('background-color', 'red');

// 4. 可见性过滤选择器
//    display:none  或者，input type=hidden不可见，没有它的位置
//    visibility:hidden 或者 opactiy:0  不可见，但是有位置。

//$(':hidden').css('display', 'block');
//
//$(':visible').css('background-color', 'red');

// 5. 内容过滤器
//    包含文本字符
//$('div:contains(\'3\')').css('background-color', 'red');
//    空的
//$('div:empty').text(123);
//    包含子元素或者文本
//$('div:parent').css('background-color', 'green');
//    包含子元素
//$('div:has(p)').css('background-color', 'red');

// 6. 属性过滤选择器
//    带有属性的
//$('div[myAttr]').css('background-color','red');
//    带有属性，并且符合属性值
//$('div[myAttr=\'a11\']').css('background-color', 'red');
//    不带有属性，或者带有属性并且不符合属性值
//$('div[myAttr!=\'a11\']').css('background-color', 'red');
//    带有属性，但是不符合属性值
//$('div').filter('[myAttr]').filter('[myAttr!=\'a11\']').css('background-color', 'red');
//$('div[myAttr][myAttr!=\'a11\']').css('background-color', 'red');
//    属性值以xxx开头
//$('div[myAttr^=\'a1\']').css('background-color', 'red');
//    属性值以xxx结尾
//$('div[myAttr$=\'22\']').css('background-color', 'red');
//    属性值包括xxx
//$('div[myAttr*=\'1\']').css('background-color', 'red');

// 7. 表单过滤器
//$(':input').css('display', 'none');
//$(':text').css('display', 'none');
//$(':password').css('display', 'none');
//$(':radio').css('display', 'none');
//$(':checkbox').css('display', 'none');
//$(':submit').css('display', 'none');
//$(':reset').css('display', 'none');
//$(':button').css('display', 'none');
//$(':image').css('display', 'none');
//$(':file').css('display', 'none');

//$(':enabled').css('display', 'none');
//$(':disabled').css('display', 'none');

//$(document).ready(function(){
//	$('button:contains(\'f1\')').click(function(){
//		alert($(':selected').val());
//	});
//	
//	$('button:contains(\'f2\')').click(function(){
//		alert($(':checked').val());
//	});
//});
