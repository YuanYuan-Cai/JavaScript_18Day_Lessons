//for

////0~19
//for(var i = 0;i < 20;i++){
////	document.write('[for]' + i +'<br />');
//}
//
//var i = 0;
//for(;i<20;){
////	document.write('[for]' + i +'<br />');
//	i++;
//}
//
////do while
//i = 0;
//do{
////	document.write('[while]' + i +'<br />');
//}while(i < 20)
//
////while
//i = 0;
//while(i < 20){
////	document.write('[while]' + i +'<br />');
//	i++;
//}

//break与continue
var i = 0;
while(i < 20){
	if(i == 10){
		break;
	}
	document.write('[break]' + i +'<br />');
	i++;
}

document.write('-------------[continue]------------<br />');

i = 0;
while(i < 20){
	if(i == 10){
		i++;
		continue;
	}
	document.write('[continue]' + i +'<br />');
	i++;
}

//005-1:16:10