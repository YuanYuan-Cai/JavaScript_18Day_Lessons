//switch

//0:星期日
//1:星期一
//~
//6:星期六

var day = 8,x;

//if(day == 0){
//	x = '星期天';
//}else if(day == 1){
//	x = '星期一';
//}else if(day == 2){
//	x = '星期二';
//}else if(day == 3){
//	x = '星期三';
//}else if(day == 4){
//	x = '星期四';
//}else if(day == 5){
//	x = '星期五';
//}else if(day == 6){
//	x = '星期六';
//}else{
//	x = 'Error';
//}

//防止将==写成=
//if(0 == day){
//	x = '星期天';
//}else if(1 == day){
//	x = '星期一';
//}else if(2 == day){
//	x = '星期二';
//}else if(3 == day){
//	x = '星期三';
//}else if(4 == day){
//	x = '星期四';
//}else if(5 == day){
//	x = '星期五';
//}else if(6 == day){
//	x = '星期六';
//}else{
//	x = 'Error';
//}


switch(day){
	case 0:
		x = '星期天';
		break;
	case 1:
		x = '星期一';
		break;
	case 2:
		x = '星期二';
		break;
	case 3:
		x = '星期三';
		break;
	case 4:
		x = '星期四';
		break;
	case 5:
		x = '星期五';
		break;
	case 6:
		x = '星期六';
		break;
	default:
		x = 'Error';
		break;
}
document.write('[switch]'+ x + '<br />');