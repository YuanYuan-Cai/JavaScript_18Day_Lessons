// 求100以内的素数

//function isSuShu(n){
//	var m = Math.ceil(Math.sqrt(n));
//	for(var i = 2;i < m;i++){
//		if(n % i == 0){
//			break;
//		}
//	}
//	return (i == m)?true:false;
////	if(i == n){
////		return true;
////	}else{
////		return false;
////	}
//}
//
//function getAllSuShu(n){
//	for(var i = 2;i <= n;i++){
//		if(isSuShu(i)){
//			console.log('found: ' + i);
//		}
//	}
//}
//
//getAllSuShu(100);

// 敲七

function isSeven(n){
	return (n % 7 == 0 || n % 10 == 7)?true:false;
	
//	if(n % 7 == 0 || n % 10 == 7){
//		return true;
//	}else{
//		return false;
//	}
}

function play(n){
	for(var i = 1;i <= n; i++){
		if(isSeven(i)){
			console.log('敲');
		}else{
			console.log(i);
		}
	}
}
play(100);