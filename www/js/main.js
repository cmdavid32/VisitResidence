var base_url = 'http://localhost/visit_app/';
var ws_url = 'https://visitresidence.com/sistema/';

var usuario = userget();

function alert_top(type,text){
  $(".alert-layer").remove();
  switch (type) {
    case 'success':
    html='<div class="alert-layer"><div class="alert-content alert-success"><div class="container"><span class="texto-alerta">'+text+'<span><span class="closebtn">×</span></div></div></div>';
    break;
    case 'error':
    html='<div class="alert-layer"><div class="alert-content alert-error"><div class="container"><span class="texto-alerta">'+text+'<span><span class="closebtn">×</span></div></div></div>';
    break;
    case 'info':
    html='<div class="alert-layer"><div class="alert-content alert-info"><div class="container"><span class="texto-alerta">'+text+'<span><span class="closebtn">×</span></div></div></div>';
    break;
    default:
    
    break;
  }
  $("body").append(html);
  $(".alert-layer").fadeIn();
}
$(document).on("click",'.alert-layer, .alert-layer .closebtn',function(){
  $(".alert-layer").fadeOut(250,function(){$(this).remove()});
});
$(document).ready(function() {
  if (usuario && usuario.tipo_usuario==2) {
    $('.visitas').attr('href', 'opciones_visita.html');
  }else if(usuario && usuario.tipo_usuario==3){
    $('.usuarios-only').remove();
  }

  w = $(this).width();
  h = $(this).height();

  $('.splash-container').height(h).width(w);

});