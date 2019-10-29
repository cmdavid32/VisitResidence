$(document).ready(function() {
	usuario = userget();

	$.ajax({
		url: ws_url+'WS/get_mensajes',
		type: 'POST',
		dataType: 'JSON',
		data: {id: usuario.id},
	})
	.done(function(response) {
		$('#tabla-recibidos').html(response.recibidos);
		$('#tabla-enviados').html(response.enviados);
	})
	.fail(function() {
		console.log("error");
	});
	
});


$(document).on('click', '.btn-change', function(event) {
	event.preventDefault();

	trigger = $(this).data('trigger');

	$('.tabla-visit-residence').addClass('d-none');
	$('#'+trigger).removeClass('d-none');
});

$(document).on('submit', '#form-nuevo-mensaje', function(event) {
	event.preventDefault();
	string = $('[name="texto"]').val();
	$.ajax({
		url: ws_url+'WS/crear_mensaje',
		type: 'POST',
		dataType: 'JSON',
		data: {de: usuario.id, texto: string, residencia: usuario.residencia},
	})
	.done(function(response) {
		if (response.error==0) {
			swal("Completado", response.message, "success");
			$('#form-nuevo-mensaje').trigger('reset');
		}else{
			swal("Error", response.message, "error");
		}
	})
	.fail(function() {
		console.log("error");
	});
	

	return false;
});

$(document).on('click', '.btn-responder', function(event) {
	event.preventDefault();
	swal("Responder a este mensaje:", {
		content: "input",
		button: {
			text: "Responder",
		},
	})
	.then((string) => {
		$.ajax({
			url: ws_url+'WS/crear_mensaje',
			type: 'POST',
			dataType: 'JSON',
			data: {de: usuario.id, texto: string, residencia: usuario.residencia},
		})
		.done(function(response) {
			if (response.error==0) {
				swal("Completado", response.message, "success").then((ok)=>{
					if (ok) {
						location.reload();
					}
				});
			}else{
				swal("Error", response.message, "error");
			}
		})
		.fail(function() {
			console.log("error");
		});
		
	});

});