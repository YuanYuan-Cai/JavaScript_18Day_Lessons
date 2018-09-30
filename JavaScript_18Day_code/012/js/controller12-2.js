// 遍历DOM tree

//function goThrough(node, x){
//	if(node.childNodes != undefined){
//		for(var i = 0; i < node.childNodes.length; i++){
//			var a = node.childNodes[i];
//			var s = a.nodeType + '-' + a.nodeName + '-' + a.nodeValue + '-';
//			console.log(x + s);
//			if(a.attributes != undefined && a.attributes.length != 0){
//				var attr = '{attr:';
//				for(var j = 0; j < a.attributes.length; j++){
//					var b = a.attributes[j];
//					attr += b.nodeType + '-' + b.nodeName + '-' + b.nodeValue;
//				}
//				attr += '}';
//				console.log(x + attr);
//			}
//			goThrough(a, x + '\t');
//		}
//	}
//}
//
//goThrough(document, '');

function getChildren(element){
	var children = [];
	if(element.childNodes != undefined){
		for(var i = 0; i < element.childNodes.length; i++){
			var a = element.childNodes[i];
			if(a.nodeType == 1){
				children.push(a);
			}
		}
	}
	
	return children;
}

console.log(getChildren(document.body));
