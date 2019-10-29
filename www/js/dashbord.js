$(document).ready(function() {
	if (usuario && usuario.tipo_usuario==1) {
		var html = '<div class="icons-media-container mbr-white"><div class="card col-12 col-md-6"><div class="icon-block"><a href="opciones_residentes.html"><span class="mbr-iconfont mbri-users" style="color: rgb(20, 157, 204);"></span></a></div><h5 class="mbr-fonts-style display-5">Residentes</h5></div>';
		$('.icons-media-container').append(html);
	}else if (usuario && usuario.tipo_usuario==3) {
		$('#second').remove();
	}
});