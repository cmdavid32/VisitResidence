if (userget()) {
  location.href="dashboard.html";
}


$('#login-form').submit(function() {
  $.ajax({
    url: ws_url+'WS/login',
    type: 'POST',
    dataType: 'JSON',
    data: $(this).serialize(),
    beforeSend:function(load) {
      $('#login-load').removeClass('d-none');
    }
  })
  .done(function(response) {
   if (response.error==1) {
    alert_top('error',response.message);
    $('#login-load').addClass('d-none');
  }else{
    localStorage.setItem("VISIT_USER",JSON.stringify(response.result));
    location.href="dashboard.html";
  }
})
  .fail(function() {
    console.log("error");
  });
  
  return false;
});