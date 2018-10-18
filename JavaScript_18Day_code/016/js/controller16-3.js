// AJAX in Jquery

$(document).ready(function(){
	$('#theB').click(function(){
		htmlobj = $.ajax({
			type: "get",
			url: './json/data.json',
			async: true,
			dataType: 'json',
			success: function(data){
				//$('#theD').text(JSON.stringify(data));
				//console.log(data);
				
				$('#theD').append(jsonToHTML(data));
			}
		});
	});
});

function jsonToHTML(json){
	var table = $('<table/>');
	$(json['LINE']).each(function(){
		var tr = $('<tr/>').appendTo(table);
		$(this['COLUMN']).each(function(){
			var th = $('<th/>').html(this['TEXT']).appendTo(tr);
		});
	});
	
	return table;
}
