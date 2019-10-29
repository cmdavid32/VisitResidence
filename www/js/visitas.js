$(document).ready(function() {
	usuario = userget();
	if (usuario.tipo_usuario==3) {
		$.ajax({
			url: ws_url+'WS/get_visitas',
			type: 'POST',
			dataType: 'HTML',
			data: {residencia: usuario.residencia},
		})
		.done(function(response) {
			$('#tabla-visitas').html(response)
		})
		.fail(function() {
			console.log("error");
		});
	}else{
		$.ajax({
			url: ws_url+'WS/get_mis_visitas',
			type: 'POST',
			dataType: 'HTML',
			data: {usuario: usuario.id},
		})
		.done(function(response) {
			$('#tabla-visitas').html(response)
		})
		.fail(function() {
			console.log("error");
		});
		$('[name="usuario"]').val(usuario.id);
		$('[name="residencia"]').val(usuario.residencia);
	}
});


$(document).on('click', '.btn-validate', function(event) {
	id = $(this).data('id');
	event.preventDefault();
	swal({
		title: "¿Valdiar esta visita?",
		icon: "warning",
		buttons: true,
		dangerMode: false,
	})
	.then((respuesta) => {
		if (respuesta) {
			$.ajax({
				url: ws_url+'WS/check_visita',
				type: 'POST',
				dataType: 'JSON',
				data: {id_visita: id},
			})
			.done(function(response) {
				if (response.error==0) {
					swal(response.message, {
						icon: "success",
					}).then((evento)=>{
						if (evento) {
							location.reload();
						}
					});
				}
			})
			.fail(function() {
				console.log("error");
			});
		} else {
		}
	});
});


$(document).on('submit', '#form-nueva-visita', function() {
	event.preventDefault();
	$.ajax({
		url: ws_url+'WS/nuevaVistita',
		type: 'POST',
		dataType: 'JSON',
		data: $(this).serialize(),
	})
	.done(function(response) {
		if (response.error==0) {
			swal("Completado", response.message, "success");
			$('#form-nueva-visita').trigger('reset');
		}else{
			swal("Error", response.message, "error");
		}
	})
	.fail(function() {
		console.log("error");
	});
	
	return false;
});