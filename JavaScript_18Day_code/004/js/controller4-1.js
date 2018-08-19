//if
var iScore = 70;
if(iScore > 60){
	document.write('[if]U r a good student <br />');
}

iScore = 50
if(iScore >= 60){
	document.write('[if]U r a good student! <br />');
}else{
	document.write('[if]oh! my god! <br />');
}

//100~90:优
//90 ~75:良
//75 ~60:中
//60以下   :差

iScore = 55;

//不好，不好读
//if(iScore >= 90){
//	document.write('[if]优<br />');//1
//}else{
//	if(iScore >= 75){
//		document.write('[if]良<br />');//2
//	}else{
//		if(iScore >= 60){
//			document.write('[if]中<br />');//3
//		}
//		else{
//			document.write('[if]差<br />');//4
//		}
//	}
//}

if(iScore >= 90){
	document.write('[if]优<br />');//1
}else if(iScore >= 75){
	document.write('[if]良<br />');//2
}else if(iScore >= 60){
	document.write('[if]中<br />');//3
}else{
	document.write('[if]差<br />');//4
}

