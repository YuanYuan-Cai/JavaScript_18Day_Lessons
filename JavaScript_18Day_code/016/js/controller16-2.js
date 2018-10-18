//// AJAX JS原生实现 JSON

var jsonHttp;

function loadJSONDoc(url){
	jsonHttp = null;
	
	if(window.XMLHttpRequest){
		jsonHttp = new XMLHttpRequest();
	}else if(window.ActiveXObject){
		jsonHttp = new ActiveXObject('Microsoft.XMLHTTP');
	}
	
	if(jsonHttp != null){
		jsonHttp.onreadystatechange = stateChange;
		jsonHttp.open('GET', url + '?t=' + Math.random(), true);
		jsonHttp.send();
	}
}

function stateChange(){
	if(jsonHttp.readyState == 4){
		if(jsonHttp.status == 200){
			var theDiv = document.getElementById('theD');
			//theDiv.innerText = jsonHttp.responseText;
			//console.log(jsonToHTML(jsonHttp.responseText));
			theDiv.innerHTML = jsonToHTML(jsonHttp.responseText);
		}
	}
}

function jsonToHTML(jsonString){
	var strTmp = '<table>';
	var json = JSON.parse(jsonString);
	var lines = json['LINE'];
	for(var i = 0; i < lines.length; i++){
		var columns = lines[i]['COLUMN'];
		strTmp += '\n\r\t<tr>';
		strTmp += '\n\r\t\t<th>' + columns[0]['TEXT'] + '</th>';
		strTmp += '\n\r\t\t<th>' + columns[1]['TEXT'] + '</th>';
		strTmp += '\n\r\t</tr>';
	}
	
	strTmp += '\n\r</table>';
	
	return strTmp;
}
