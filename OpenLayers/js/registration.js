

$("#registrarse_boton").click(function(e) {
	e.preventDefault();
	if( $("#inputPassword").val() == "" || $("#confirmPassword").val() == "" || $("#email").val() == "" || $("#apellidos").val() == "" || $("#nombre").val() == "")
	{
		if($("#inputPassword").val() == "")
			{
				document.getElementById('inputPassword').style.background='#F6B5B5';
				$('#inputPassword').attr('placeholder','Fill it!');
			}
		if($("#confirmPassword").val() == "")
			{
				document.getElementById('confirmPassword').style.background='#F6B5B5';
				$('#confirmPassword').attr('placeholder','Fill it!');
			}
		if($("#email").val() == "")
			{
				document.getElementById('email').style.background='#F6B5B5';
				$('#email').attr('placeholder','Fill it!');
			}
		if($("#apellidos").val() == "")
			{
				document.getElementById('apellidos').style.background='#F6B5B5';
				$('#apellidos').attr('placeholder','Fill it!');
			}
		if($("#nombre").val() == "")
			{
				document.getElementById('nombre').style.background='#F6B5B5';
				$('#nombre').attr('placeholder','Fill it!');
			}
	}
	else{
	if( $("#inputPassword").val() == $("#confirmPassword").val())
	    {
			var create = new Object();
			create.loginid =  $("#nombre").val();
			create.password = $("#inputPassword").val();
			create.email = $("#email").val();
			create.fullname = $("#apellidos").val();
			CreateUser(create);		
	    }
	     else{
			alert("Passwords not agree");
	         }
	}
});