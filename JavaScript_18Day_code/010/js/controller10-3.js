// JSON
//串行化
//持久化
//- JSON指的是JavaScript对象表示法（JavaScript Object Notation）
//- JSON对象
//	- {}中书写 
//	- 名称/值对，“key”:“value”
//- JSON数组 
//	- []中书写
//	- 对象间，用逗号分隔

// JSON 字符串
//var strJSON = '{"name":"Cyy",\n' + '"age":25}';
//
//console.log(strJSON);
//
//// string -> object
//// 1，eval()你自己产生一个string 当做JS脚本，交由JS引擎运行
//var strJSON2 = '(' + strJSON + ')';
//console.log(strJSON2);
//var obj1 = eval(strJSON2);
////↑相当于↓
////var obj1 = {
////	'name':'Cyy',
////	'age':25
////}
//
//// 2.JSON.parse()
//var obj2 = JSON.parse(strJSON);
//
//// 3,$().parseJON()
//var obj3 = jQuery.parseJSON(strJSON);
//
//// object -> string
//// 1,JSON.stringify()
//
//var strJSON3 = JSON.stringify(obj1);
//console.log(strJSON3);
//
////2,jquery.toJSON()
//var strJSON4 = jQuery.toJSON(obj1);
//console.log(strJSON4);

//练习1，把一张九九乘法表放入JSON，然后解析
//{
//	'0':['1 x 1 = 1'],
//	'1':['1 x 2 = 2','2 x 2 = 4'],
//	...
//}

//var oNNTable = {};
//for(var i = 1;i <= 9; i++){
//	var line = [];
//	for(var j = 1;j <= i;j++){
//		var str = i + 'x' + j + '=' +(i*j);
//		line.push(str);
//	}
//	oNNTable[i-1] = (line);
//}
//
//var sNNTable = JSON.stringify(oNNTable);
//
//var jsonTable = JSON.parse(sNNTable);
//for(var x in jsonTable){
//	var line = jsonTable[x];
//	for(var y in line){
//		var text = line[y];
//		console.log(text);
//	}
//}

// 练习2，把一张学生成绩单，放入JSON然后解析
// 学生的信息，包括：name，birthday，gender，class，{course，scale}

var oStdTable = {};
oStdTable.students = [];

var student ={
	'name':'小明',
	'birthday':'1998-03-08',
	'class':'一班',
	'scales':[
		{
			'course':'语文',
			'scale':92
		},
		{
			'course':'数学',
			'scale':99
		},
		{
			'course':'英语',
			'scale':88
		}
	]
}

oStdTable.students.push(student);

var student ={
	'name':'小红',
	'birthday':'1998-03-08',
	'class':'一班',
	'scales':[
		{
			'course':'语文',
			'scale':92
		},
		{
			'course':'数学',
			'scale':99
		},
		{
			'course':'英语',
			'scale':88
		}
	]
}
oStdTable.students.push(student);


var student ={
	'name':'小齐',
	'birthday':'1998-03-08',
	'class':'一班',
	'scales':[
		{
			'course':'语文',
			'scale':92
		},
		{
			'course':'数学',
			'scale':99
		},
		{
			'course':'英语',
			'scale':88
		}
	]
}
oStdTable.students.push(student);

var sStdTable = JSON.stringify(oStdTable);
console.log(sStdTable);

var jsonTable = JSON.parse(sStdTable);
for(var x in jsonTable.students){
	console.log(jsonTable.students[x].name);
	console.log(jsonTable.students[x].birthday);
	console.log(jsonTable.students[x].class);
	
	var scales = jsonTable.students[x].scales;
	for(var y in scales){
		console.log('    ' + scales[y].course + ':' + scales[y].scale);
	}
}


