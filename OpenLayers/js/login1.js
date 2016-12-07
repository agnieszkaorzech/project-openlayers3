

$( "#form-login" ).submit(function( event ) {
  event.preventDefault();
  login($("#inputLoginid").val(), $("#inputPassword").val(), function(){
  	window.location.replace('main.html');
  });
});

