

$( "#form-logout" ).submit(function( event ) {
  event.preventDefault();
  logout(function(){
  	console.log("change");
  	window.location.replace('login.html');
  });
});