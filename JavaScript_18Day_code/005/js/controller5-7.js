// 如何清空一个数组？
// 三种方法

//// 1,length
//var arr = [1,2,3];
////console.log(arr);
////arr.length = 0;
////console.log(arr);
//
//// 2,用splice
////console.log(arr);
////arr.splice(0);
////console.log(arr);
//
////第1,2种办法的栈内存，堆内存
////栈内存
//ST001:arr,HP001
//ST002:
//ST003:
//ST004:
//ST005:
//ST006:
//
////堆内存
//HP001:[](1)
//HP002:
//HP003:
//HP004:
//
//// 3,[]
//console.log(arr);
//arr = [];
//console.log(arr);
//
////第3种办法的栈内存，堆内存
////栈内存
//ST001:arr,HP002
//ST002:
//ST003:
//ST004:
//ST005:
//ST006:
//
////堆内存
//HP001:[1,2,3](0)
//HP002:[](1)
//HP003:
//HP004:

// 已知一个数组，内部数字都是number，有重复元素，写一段程序，去重复，新生成数组
// 需要三种不同办法

// 方法1
var x = [1,3,4,5,1,3,2,1,2,4];
var y = [];
//
//// x循环
//for(var i = 0; i < x.length;i++){
//	//看一看这个元素y里面是不是有，如果有的话，算了，没有，push
//	for(var j = 0; j < y.length;j++){
//		if(x[i] == y[j]){//等于，说明是重复的
//			break;
//		}		
//	}
//	//不重复，push，重复，算了
//	if(j >= y.length){
//		y.push(x[i]);
//	}
//}
//console.log(x);
//console.log(y);

// 时间复杂度：与x的元素个数成正比
// N x.length
// 0 + 1 + 2 + 3 ... (N - 1) = N(N-1)/2=(1/2)N^2-(1/2)N=N^2
// O(N^2)

// 方法2
// 对x进行排序，不用每次翻找y
//x.sort();
//console.log(x);
//for(var i = 0;i < x.length;i++){
//	if(y.length == 0 || y[y.length-1] !== x[i]){
//		y.push(x[i]);
//	}
//}
//console.log(y);
// 时间复杂度：生成y的时间复杂度O(N)
// x排序，时间复杂度O(N*logN)堆排序
// 基于比较的排序，堆排序，时间O(N*logN)

// 方法3
var arrMap = [];
for(var i = 0;i < x.length;i++){
	arrMap[x[i]] = true;
}
for(var j in arrMap){
	y.push(+j);//前面j的+是将字符串变为数字
}
console.log(y);
// 时间复杂度：取决于arrMap[]的时间复杂度
// logN =》 N*logN-------二叉树
// 1 =》 N--------哈希表

// SQL 关系型数据库MySQL           B+树----------查询速度logN
// No-SQL REDIS,memcache        哈希表----------查询速度1

// 已知一个数组，number，字符串，boolean，去重？
// 1,使用===判断，方法1适用
// 2,首先轮询数组，用typeof把number，string，boolean分开
//   number 排序
//   string 排序
//   boolean 排序
//    归并三个数组
// 3,首先轮询数组，用typeof把number，string，boolean分开
//   number map
//   string map
//   boolean map
//    归并三个数组  