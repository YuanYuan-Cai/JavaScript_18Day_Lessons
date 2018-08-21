//正则表达式 有限自动状态机
//--------------正则表达式的基础使用---------------
//1.正则表达式类,RegExp(exp,param)
var regExp = new RegExp('[0-9]+','g');//正整数
//[]指代一个字符，里面的字符表示这个被指代的字符的选择范围
// + 前面的字符，1次或者1次以上

//参数：g global，全局

var str1 = '123123123a1234';
//console.log(str1.match(regExp));
//在match这个函数里：
// g,匹配所以的字符串
// 没有g，匹配第一个，然后停止

//2.直接量
//用两个撇斜杠，/expression/param
// String对象的match
//console.log(str1.match(/[0-9]+/g));
//console.log(str1.match(/\d+/g));
//console.log(str1.match(/123/g));
//console.log(str1.match(/(123)+/g));

//RegExp对象的test方法
var regExp2 = /[0-9]+/g;
//console.log(typeof(regExp2));
//regExp.test(str)看str能不能匹配上regExp,如果能返回true，不能返回false
//console.log(regExp2.test(str1));

//----------------正则表达式详解-------------------
//1.简单类：
// 1.1单词本身
var str = 'hello world!';
//console.log(str.match(/hello/g));
// 2.范围类 []指代一个字符，内部指出字符的范围
// [0123456789] [0-9] [a-z] [A-Z]
//  十六进制[0-9a-fA-F]
//  3.负向类[^0-9]不能是数字，排除数字
str = '4;4517;ah782;Bz553;';
//console.log(str.match(/[0123456789]/g));
//console.log(str.match(/[0-9]/g));
//console.log(str.match(/\d/g));

//匹配字符串中的两位数
//console.log(str.match(/[0-9][0-9]/g));
// 4.量词：一个前面单位出现的次数
// {n}出现n次
//console.log(str.match(/[0-9]{2}/g));
//{m,n}至少m次，至多n次
//console.log(str.match(/[0-9]{3,4}/g));
// {m,} 至少m次，至多不限
// ? 0次或者1次， ={0,1}
// + 1次或者多余1次 ={1,}
// * 0次或者多余0次 ={0,,}
// 贪婪量词：? + * 匹配是找到匹配的最大串
//console.log(str.match(/[0-9]+/g));
// 惰性量词：*? +? 匹配是找到匹配的最小串
//console.log(str.match(/[0-9]+?/g));

//找到所有16进制数
//console.log(str.match(/[0-9a-fA-F]+/g));//贪婪
//console.log(str.match(/[0-9a-fA-F]+?/g));//惰性
//console.log(str.match(/[^0-9a-fA-F]+?/g));//匹配所以不是的

str = 'abbbaabbbaaabbb1234';
//console.log(str.match(/.*bbb/g));//贪婪
//console.log(str.match(/.*?bbb/g));//惰性

// 5.通配符 预定义类
// .  = [^\n\r]除了回车换行以外，都可以匹配
// \d = [0-9] 数字
// \D = [^0-9] 非数字
// \w = [a-zA-Z_0-9] 数字字母下划线
// 变量名/[a-zA-Z_]\w*/
// \W = [^a-zA-Z_0-9] 其他
// \s = [\t\n\x0B\f\r] 空格或者空白
// \S = 非空格或者非空白
// \b 表示边界(两个字符中间的位置)，一边是\w,一边是\W
// \B 不是边界
// ^ 表示开始
// $ 表示结束
str = 'a==b';
console.log(str.match(/.\b/g));
console.log(str.match(/.\b./g));
console.log(str.match(/^./g));
console.log(str.match(/^a/g));
console.log(str.match(/.$/g));

// 6.分组,一个正则表达式，不但可以对整个匹配进行操作，还可以对其中的()中的子串进行匹配，分组
str = 'mom and dad';
console.log(str.match(/mom(and dad)?/));
console.log(RegExp.$1);

str = 'word excel excel hello world world!';
console.log(str.match(/(\b[a-zA-Z]+\b)\s+\1/g));

//38
