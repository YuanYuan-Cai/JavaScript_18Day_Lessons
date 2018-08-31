// 动手实验（一）：数组中的成员函数

// slice(iStart[,iEnd])：
// 节选数组中的一段
// 原数组不受影响
// slice(iStart,iEnd)从iStart到iEnd，iStart显示，iEnd不显示
// slice(iStart)从 iStart开始，一直到头
// []里面的东西，可以有，可以没有

var arr = [0,1,2,3,4,5,6,7,8];
//console.log('[slice] ' + arr.slice(6));// 从第六(由0开始数)个开始
//console.log('[slice] ' + arr.slice(6).join(','));
//
//console.log('[slice] ' + arr.slice(-3));// 后三个
//
//console.log('[slice] ' + arr.slice(2,5));//2,3,4
//
//console.log('[slice] ' + arr.slice(-7,5));//2,3,4

// splice(iIndex[,iHowmany][,item1][,item2][,item3]...)
// 原数组受到影响
// 从iIndex开始，删除元素，删除几个由iHowmany决定
// item1 要插入的元素
//arr = [0,1,2,3,4,5,6,7,8];
//var arr1 = arr.splice(6);
//console.log('[splice] ' + arr);
//console.log('[splice] ' + arr1);
//
//arr = [0,1,2,3,4,5,6,7,8];
//arr1 = arr.splice(-3);
//console.log('[splice] ' + arr);
//console.log('[splice] ' + arr1);
//
//arr = [0,1,2,3,4,5,6,7,8];
//arr1 = arr.splice(2,3);
//console.log('[splice] ' + arr);
//console.log('[splice] ' + arr1);
//
//arr = [0,1,2,3,4,5,6,7,8];
//arr1 = arr.splice(-7,3);
//console.log('[splice] ' + arr);
//console.log('[splice] ' + arr1 + ' length = ' + arr.length);


//arr = [0,1,2,3,4,5,6,7,8];
//arr1 = arr.splice(2,3,-1,-2,-3,-4);
//console.log('[splice] ' + arr);
//console.log('[splice] ' + arr1);

// delete
//arr  = [0,1,2,3,4,5,6,7,8];
//console.log('[delete] ' + arr + ' length = ' + arr.length);
//delete arr[4];
//console.log('[delete] ' + arr + ' length =' + arr.length);
//delete 只是拿走内容，不拿走位置，splice位置和内容都拿走

// 二维数组
// 可以把数组作为一个元素给另外一个数组
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
matrix = [];
matrix[0] = [1,2,3];
matrix[1] = [4,5,6];
matrix[2] = [7,8,9];

//三维数组
var cubic = [];
cubic[0] = [];
cubic[0][0] = [1,2,3];
cubic[0][1] = [4,5,6];
cubic[0][2] = [7,8,9];
cubic[1] = [];
cubic[1][0] = [10,12,13];
cubic[1][1] = [14,15,16];
cubic[1][2] = [17,18,19];
cubic[2] = [];
cubic[2][0] = [21,22,23];
cubic[2][1] = [24,25,26];
cubic[2][2] = [27,28,29];

console.log(matrix[1][1]);
console.log(cubic[1][1][1]);


//值类型：number，string，boolean，undefined，bull
//引用类型：array，function，object

//内存问题：见PPT：5.类型变换&数组
变量不论值类型还是引用类型变量都放在栈内存里
值类型存储在栈内存
引用类型存储在堆内存

var a = 5;//key 就是5
var arr = [];//key是[]的地址（引用）
var s = '';
var b = a;
var arr1 = arr;
var a = [];

//栈内存
ST001:a,HP002
ST002:arr,地址001
ST003:s,'abc'
ST004:b,5
ST005:arr1,HP001
ST006:

//堆内存
HP001:[]
HP002:[]
HP003:
HP004:

