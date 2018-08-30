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
arr = [0,1,2,3,4,5,6,7,8];
var arr1 = arr.splice(6);
console.log('[splice] ' + arr);
console.log('[splice] ' + arr1);

arr = [0,1,2,3,4,5,6,7,8];
arr1 = arr.splice(-3);
console.log('[splice] ' + arr);
console.log('[splice] ' + arr1);

arr = [0,1,2,3,4,5,6,7,8];
arr1 = arr.splice(2,3);
console.log('[splice] ' + arr);
console.log('[splice] ' + arr1);

arr = [0,1,2,3,4,5,6,7,8];
arr1 = arr.splice(-7,3);
console.log('[splice] ' + arr);
console.log('[splice] ' + arr1);

arr = [0,1,2,3,4,5,6,7,8];
arr1 = arr.splice(2,3,-1,-2,-3,-4);
console.log('[splice] ' + arr);
console.log('[splice] ' + arr1);