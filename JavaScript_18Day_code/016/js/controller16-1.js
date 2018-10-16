//// AJAX JS原生实现
//
//var xmlHttp;
//
//function loadXMLDoc(url){
//	xmlHttp = null;
//	
//	if(window.XMLHttpRequest){// code for IE7, Firefox, Opera, Chrome, etc
//		xmlHttp = new XMLHttpRequest();
//	}else if(window.ActiveXObject){ // ActiveX -> COM // IE6, IE5
//		xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
//	}
//	
//	// config HTTP Ojbect
//	if(xmlHttp != null){
//		// config event to response function
//		xmlHttp.onreadystatechange = stateChange;
//		
//		xmlHttp.open('GET', url + '?t=' + Math.random(), true);
//		// open() method: GET/POST
//		//            GET: 将参数放在URL后面，使用&和?的方式拼写，
//		//            http://www.taobao.com?key1=value1&key2=value&key3=value3
//		//            局限：最长2048；
//		//                特殊字符需要编码 urlencode
//		//                有可能会缓存
//		//            POST: 先发HTTP头，再发送参数，参数被放在后续的数据包中，没有长度限制，不会缓存
//		
//		//            a: true,异步：调用返回，数据包来的时候会触发事件。
//		//               false,同步。
//		xmlHttp.send();
//	}else{
//		console.log('ERROR, xmlHttp init failed.');
//	}
//}
//
//// Response function
//function stateChange(){
//	if(xmlHttp.readyState == 4){// 4: 'loaded'
//		if(xmlHttp.status == 200){ // 200: OK
//			var theDiv = document.getElementById('theD');
//			//theDiv.innerText = xmlHttp.responseText;
//			
//			theDiv.innerHTML = xmlToHTML(xmlHttp.responseXML); 
//		}else{
//			console.log('Error: when retrieving XML data: ' + xmlHttp.statusText);
//		}
//	}
//}
//
//// parse XML
//function xmlToHTML(xml){
//	var strTmp = '<table>';
//	var lines = xml.getElementsByTagName('LINE');
//	for(var i = 0; i < lines.length; i++){
//		var columns = lines[i].getElementsByTagName('COLUMN');
//		
//		strTmp += '\n\r\t<tr>';
//		strTmp += '\n\r\t\t<th>' + columns[0].childNodes[0].nodeValue + '</th>';
//		strTmp += '\n\r\t\t<th>' + columns[1].childNodes[0].nodeValue + '</th>';
//		strTmp += '\n\r\t</tr>';
//	}
//	strTmp += '\n\r</table>';
//	//console.log(strTmp);
//	
//	return strTmp;
//}

// 以下为同步调用

var xmlHttp;

function loadXMLDoc(url){
	xmlHttp = null;
	
	if(window.XMLHttpRequest){// code for IE7, Firefox, Opera, Chrome, etc
		xmlHttp = new XMLHttpRequest();
	}else if(window.ActiveXObject){ // ActiveX -> COM // IE6, IE5
		xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
	}
	
	// config HTTP Ojbect
	if(xmlHttp != null){
		
		xmlHttp.open('GET', url + '?t=' + Math.random(), false);
		// open() method: GET/POST
		//            GET: 将参数放在URL后面，使用&和?的方式拼写，
		//            http://www.taobao.com?key1=value1&key2=value&key3=value3
		//            局限：最长2048；
		//                特殊字符需要编码 urlencode
		//                有可能会缓存
		//            POST: 先发HTTP头，再发送参数，参数被放在后续的数据包中，没有长度限制，不会缓存
		
		//            a: true,异步：调用返回，数据包来的时候会触发事件。
		//               false,同步。
		xmlHttp.send();
		
		var theDiv = document.getElementById('theD');
		//theDiv.innerText = xmlHttp.responseText;
		theDiv.innerHTML = xmlToHTML(xmlHttp.responseXML);
	}else{
		console.log('ERROR, xmlHttp init failed.');
	}
}

// parse XML
function xmlToHTML(xml){
	var strTmp = '<table>';
	var lines = xml.getElementsByTagName('LINE');
	for(var i = 0; i < lines.length; i++){
		var columns = lines[i].getElementsByTagName('COLUMN');
		
		strTmp += '\n\r\t<tr>';
		strTmp += '\n\r\t\t<th>' + columns[0].childNodes[0].nodeValue + '</th>';
		strTmp += '\n\r\t\t<th>' + columns[1].childNodes[0].nodeValue + '</th>';
		strTmp += '\n\r\t</tr>';
	}
	strTmp += '\n\r</table>';
	//console.log(strTmp);
	
	return strTmp;
}