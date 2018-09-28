// 练习：写一个函数，将数字转化为中文的大写形式，返回字符串，数字不超过1亿，小数点后保留两位。

//1234: 壹仟贰佰叁拾肆元整
//123:  壹佰贰拾叁元整
//// 中间如果有0，要补“零”
//1004: 壹仟零肆元整
//// 后面有0，不补
//1200: 壹仟贰佰元整
//12345: 壹万贰仟叁佰肆拾伍元整
//// 万到百之间，千位为0，补零。
//10305: 壹万零叁佰零伍元整
//10403305: 壹仟零肆拾万零叁仟叁佰零伍元
//
//// 角分
//3.51: 叁元伍角壹分
//3.50: 叁元伍角
//3.00: 叁元整
//3.01: 叁元壹分
//100.51: 壹佰元伍角壹分
//0.47: 肆角柒分

var CHNCHAR = ['零','壹','贰','叁','肆','伍','陆','柒','捌','玖'];

function transfer(x){
	var str = '';
	
	if(typeof(x) != 'number' || isNaN(x) || x > 100000000) return str;
	
	var iWan = Math.floor(x/10000);
	var i1   = Math.floor(x - iWan * 10000);
	var iJF  = Math.round(x * 100) % 100;
	var iJ   = Math.floor(iJF / 10);
	var iF   = iJF % 10;
	

	
	if(iWan != 0){
		str += transferS(iWan) + '万';
	}
	// 1023 0334
	// 1023 3345
	// 1023 0000
	// 1020 0000
	// 只有在万位的各位不是0，以及千位不是0的情况下，才不用加零
	if(!(iWan % 10 != 0 && Math.floor(i1 / 1000))){
		if(i1 != 0 && iWan != 0){
			str += CHNCHAR[0];
		}
	}
	// 0
	
	if(i1 != 0){
		str += transferS(i1);
	}
	
	if(str != ''){
		str += '元';
		if(iJ != 0 || iF != 0){
			if(iJ != 0){
				str += CHNCHAR[iJ] + '角';
			}
			
			if(iF != 0){
				str += CHNCHAR[iF] + '分';
			}
		}else{
			str += '整';
		}
	}else{
		if(iJ != 0 || iF != 0){
			if(iJ != 0){
				str += CHNCHAR[iJ] + '角';
			}
			
			if(iF != 0){
				str += CHNCHAR[iF] + '分';
			}
		}else{
			str += '零元整';
		}
	}
	return str;
}

function transferS(x){
	var str = '';
	
	if(typeof(x) != 'number' || isNaN(x) || x > 10000) return str;
	x = Math.floor(x);
	
	var i1 = x % 10;
	var iT = Math.floor(x / 10) % 10;
	var iH = Math.floor(x / 100) % 10;
	var iS = Math.floor(x / 1000) % 10;
	
	if(iS != 0){ // 千位不为0
		str += CHNCHAR[iS] + '仟';
		if(iH != 0){ // 千位不为0，百位不为0
			str += CHNCHAR[iH] + '佰';
			if(iT != 0){// 千位不为0，百位不为0，十位不为0
				str += CHNCHAR[iT] + '拾';
				if(i1 != 0){// 千位不为0，百位不为0，十位不为0，个位不为0 // 1234
					str += CHNCHAR[i1];
				}
				// 千位不为0，百位不为0，十位不为0，个位为0，什么都不用做
				// 1230
			}else if(i1 != 0){// 千位不为0，百位不为0，十位为0，个位不为0 // 1204
				str += CHNCHAR[0] + CHNCHAR[i1];
			}
			// 千位不为0，百位不为0，十位为0，个位为0，什么都不用做
			// 1200
		}else{// 千位不为0，百位为0
			if(iT != 0){// 千位不为0，百位为0，十位不为0 // 102X
				str += CHNCHAR[0] + CHNCHAR[iT] + '拾';
				if(i1 != 0){// 千位不为0，百位为0，十位不为0，个位不为0 // 1034
					str += CHNCHAR[i1];
				}
				// 千位不为0，百位为0，十位不为0，个位为0，什么都不用做
				// 1030
			}else{// 千位不为0，百位为0，十位为0
				if(i1 != 0){// 千位不为0，百位为0，十位为0，个位不为0 // 1004
					str += CHNCHAR[0] + CHNCHAR[i1];
				}
				// 千位不为0，百位为0，十位为0，个位为0，什么都不用做
				// 1000
			}
		}
	}else{// 千位为0
		if(iH != 0){ // 千位为0，百位不为0
			str += CHNCHAR[iH] + '佰';
			if(iT != 0){// 千位为0，百位不为0，十位不为0
				str += CHNCHAR[iT] + '拾';
				if(i1 != 0){// 千位为0，百位不为0，十位不为0，个位不为0 // 234
					str += CHNCHAR[i1];
				}
				// 千位为0，百位不为0，十位不为0，个位为0，什么都不用做
				// 230
			}else if(i1 != 0){// 千位为0，百位不为0，十位为0，个位不为0 // 204
				str += CHNCHAR[0] + CHNCHAR[i1];
			}
			// 千位为0，百位不为0，十位为0，个位为0，什么都不用做
			// 200
		}else{// 千位为0，百位为0
			if(iT != 0){// 千位为0，百位为0，十位不为0 // 2X
				str += CHNCHAR[iT] + '拾';
				if(i1 != 0){// 千位为0，百位为0，十位不为0，个位不为0 // 24
					str += CHNCHAR[i1];
				}
				// 千位为0，百位为0，十位不为0，个位为0，什么都不用做
				// 20
			}else{// 千位为0，百位为0，十位为0
				if(i1 != 0){// 千位为0，百位为0，十位为0，个位不为0 // 4
					str += CHNCHAR[i1];
				}else{
				// 千位为0，百位为0，十位为0，个位为0，什么都不用做
				// 0
					str += CHNCHAR[0];
				}
				
			}
		}
	}
	
	return str;
}

//console.log(transferS(1234));
//console.log(transferS(1230));
//console.log(transferS(1204));
//console.log(transferS(1200));
//console.log(transferS(1034));
//console.log(transferS(1030));
//console.log(transferS(1004));
//console.log(transferS(1000));
//console.log(transferS(123));
//console.log(transferS(120));
//console.log(transferS(103));
//console.log(transferS(100));
//console.log(transferS(25));
//console.log(transferS(20));
//console.log(transferS(3));
//console.log(transferS(0));

console.log(transfer(12345678));
console.log(transfer(12305678));
console.log(transfer(12340678));
console.log(transfer(12340678.51));
console.log(transfer(12340678.01));
console.log(transfer(12340678.50));
console.log(transfer(5678));
console.log(transfer(0.47));
console.log(transfer(0));
console.log(transfer(578));
