//比较运算符

// > 数字比较

document.write('[>] 1 > 2 ?' + 1 > 2 + '<br />');//true
// + 的优先级比 > 大
//'[>] 1 > 2 ?' + 1 > 2 + '<br />'
//'[>] 1 > 2 ? 1' > 2 + '<br />'
//'[>] 1 > 2 ? 1' >  '2 <br />'
//[的ascii值比1的ascii值大,所以返回true

document.write('[>] 1 > 2 ?' + (1 > 2) + '<br />');
document.write('[<] 1 < 2 ?' + (1 < 2) + '<br />');
document.write('[>=] 1 >= 2 ?' + (1 >= 2) + '<br />');
document.write('[<=] 1 <= 2 ?' + (1 <= 2) + '<br />');

// 字符串比较
//ascii需要背的内容：0→30H,A→41H,a→61H
document.write('[>] \'aaa\' > \'bbb\' ? ' + ('aaa' > 'bbb') + '<br />');//false
document.write('[>] \'aaa\' > \'abb\' ? ' + ('aaa' > 'abb') + '<br />');//false
document.write('[>] \'aaa\' > \'abb\' ? ' + ('aaa' > 'aBb') + '<br />');//true
document.write('[>] \'aaa\' > \'abb\' ? ' + ('aaa' > 'aBb') + '<br />');//true

document.write('[>] \'25\' < \'4\' ? ' + ('25' < '4') + '<br />');//true
document.write('[>] \'25\' < 4 ? ' + ('25' < 4) + '<br />');//flase
//↑可以看出，当一个数与一个可以转换为数的字符串比较的时候，会将字符串转换为数

document.write('[>] \'aaa\>4 ? ' + ('aaa'> 4) + '<br />');//false
//将'aaa'→NaN

//三元运算符
document.write('[?:] 25>4? ' + (25 > 4?'l':'s') + '<br />');

// ==
document.write('[==] null == undefined ? ' + (null == undefined) + '<br />');
document.write('[==] \'NaN\' == NaN ?' + ('NaN' == NaN) + '<br />');
document.write('[==] NaN == NaN ?' + (NaN == NaN) + '<br />');
document.write('[!=] NaN != NaN ?' + (NaN != NaN) + '<br />');
document.write('[==] 0 == false ?' + (0 == false) + '<br />');
document.write('[==] 1 == true ?' + (1 == true) + '<br />');
document.write('[==] 2 == true ?' + (2 == true) + '<br />');
document.write('[==]null == 0 ?' + (null == 0) + '<br />');//false

document.write('[==]\'5\' == 5 ?' + ('5' == 5) + '<br />');//true
document.write('[===]\'5\' === 5 ?' + ('5' === 5) + '<br />');//false
document.write('[!=]\'5\' != 5 ?' + ('5' != 5) + '<br />');
document.write('[!==]\'5\' !== 5 ?' + ('5' !== 5) + '<br />');

//关于== 和 ===
document.write('[==]null == undefined ?' + (null == undefined) + '<br />');
document.write('[===]null === undefined ?' + (null === undefined) + '<br />');
document.write('[==]true == 1 ?' + (true == 1) + '<br />');
document.write('[===]true === 1 ?' + (true === 1) + '<br />');
document.write('[==]false == 0 ?' + (false == 0) + '<br />');
document.write('[===]false === 0 ?' + (false === 0) + '<br />');
document.write('[==][] == \'\' ?' + ([] == '') + '<br />');
document.write('[===][] === \'\' ?' + ([] === '') + '<br />');
document.write('[==]{} == \'[object Object]\' ?' + ({} == '[object Object]') + '<br />');
document.write('[===]{} === \'[object Object]\' ?' + ({} === '[object Object]') + '<br />');
document.write('[==][5] == \'5\' ?' + ([5] == '5') + '<br />');
document.write('[===][5] === \'5\' ?' + ([5] === '5') + '<br />');

/*
 * 
规则：
 ▸如果一个运算数是 Boolean 值，在检查相等性之前，
把它转换成数字值。 false 转换成 0， true 为 1。
▸ 如果一个运算数是字符串，另一个是数字，在检查相等
性之前，要尝试把字符串转换成数字。
▸ 如果一个运算数是对象，另一个是字符串，在检查相等
性之前，要尝试把对象转换成字符串。
▸ 如果一个运算数是对象，另一个是数字，在检查相等性
之前，要尝试把对象转换成数字。
 */
