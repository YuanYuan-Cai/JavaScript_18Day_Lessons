//数组
//JS的数组是弱类型
var arr = [];
var arr1 = [0,1,2,3];

var arr2 = [0,1,,3];
var arr3 = [,,,]
var arr4 = [0,'accc',undefined,null,true,{}];

//如何访问数组元素
console.log(arr1[1]);
console.log(arr4[3]);

//如果一个下标位置原来不存在，会增加；如果必须，还会增加length
arr[3] = 5;
console.log(arr2);
arr2[2] = 2;
console.log(arr2);

//如果下标存在，就会覆盖
arr2[0] = 'ab';
console.log(arr2);

//数组有长度length
console.log(arr.length);

//使用构造函数方式生成数组
arr = new Array();//等价于arr = [];
arr1 = new Array(0,1,2,3);//等价于 arr1 = [0,1,2,3];
arr3 = new Array(4);//不等于arr3 = [4];而等价于arr3 = [,,,,]

// 稀疏数组\矩阵
var larr = new Array(10000);
