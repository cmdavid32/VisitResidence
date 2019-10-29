$(document).ready(function() {
	usuario = userget();
	codigo = usuario.codigo_residencia;
	$('[name="codigo-casa"]').val(codigo);
	$('[name="residencia"]').val(usuario.residencia);
});

$(document).on('click', '.generar-pass', function(event) {
	event.preventDefault();
	$.ajax({
		url: ws_url+'Secure/generar_pass',
		type: 'GET',
		dataType: 'HTML',
	})
	.done(function(pass) {
		$('[name="pass"]').val(pass);
	})
	.fail(function() {
		console.log("error");
	})
});

$(document).on('keyup', '[name="casa"]', function(event) {
	event.preventDefault();
	string = $(this).val();
	$('[name="codigo-casa"]').val(codigo+string);
});

$(document).on('keyup', '[name="correo"]', function(event) {
	event.preventDefault();
	$.ajax({
		url: ws_url+'Secure/validate_email',
		type: 'POST',
		dataType: 'JSON',
		data: {correo: $(this).val()},
	})
	.done(function(response) {
		if (response==1) {
			swal ( "Error" ,  "¡Este correo ya esta en uso!" ,  "error" );
			$('[name="correo"]').val('');
		}else{

		}
	})
	.fail(function() {
		console.log("error");
	})
});

$(document).on('submit', '#form-nuevo-usuario', function(event) {
	event.preventDefault();
	console.log($(this).serialize());
	$.ajax({
		url: ws_url+'Dashboard/nuevo_usuario',
		type: 'POST',
		dataType: 'JSON',
		data: $(this).serialize(),
		success:function(response) {
			if (response.error==0) {
				swal("Completado", response.message, "success");
				$('#form-nuevo-usuario').trigger('reset');
			}else{
				swal("Error", response.message, "error");
			}
		}
	});
	return false;
});

