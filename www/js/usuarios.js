$(document).ready(function() {
	usuario = userget();
	$.ajax({
		url: ws_url+'WS/get_usuarios',
		type: 'POST',
		dataType: 'HTML',
		data: {residencia: usuario.residencia},
	})
	.done(function(response) {
		$('#tabla-usuarios').html(response);
	})
	.fail(function() {
		console.log("error");
	});
	
});