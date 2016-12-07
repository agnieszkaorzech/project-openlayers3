//var BASE_URI="http://localhost:8080/where";
var BASE_URI="http://147.83.7.206:8080/where";


$("#button_delete").click(function(e) {
    e.preventDefault();
    deleteUser();
});


$("#button_edit").click(function(e) {
    e.preventDefault();
	var edit = new Object();
	edit.loginid =  $("#nombre").val();
	edit.email = $("#inputEmail").val();
	edit.fullname = $("#apellidos").val();
    updateUser(edit);
});


function deleteUser() {
	var authToken = JSON.parse(sessionStorage["auth-token"]);
	var url = BASE_URI + '/users/' + authToken.userid;
	$("#delate_result").text('');
	//var data = JSON.stringify(loginid);

				
		   
		   $.ajax({
		
           name: authToken.userid,
           url : url,
           type : 'DELETE',
           crossDomain : true,
           dataType : 'json',
		   //contentType : application/x-www-form-urlencoded,
		   	headers: {
			"X-Auth-Token":authToken.token},
             statusCode: {
				404: function() {
				alert( "page not found" );}}
				}).fail(function() {
							$('<div class="alert alert-danger"> <strong>Oh!</strong> Error! </div>').appendTo($("#delate_result"));
							}).done(function() {
							$('<div class="alert alert-success"> <strong>Done!</strong> You have deleted this user! </div>').appendTo($("#delate_result"));
                            window.location='login.html';
							});
    
}


function updateUser(edit) {
	var authToken = JSON.parse(sessionStorage["auth-token"]);
	var url = BASE_URI + '/users/' + authToken.userid;
	edit.id = authToken.userid;
	var data = JSON.stringify(edit);

	$("#put_result").text('');

	$.ajax({
		url : url,
		type : 'PUT',
		crossDomain : true,
		dataType : 'json',
		contentType: 'application/vnd.dsa.where.user+json',
		data : data,
		headers: {
			"X-Auth-Token":authToken.token},
  }).done(function(data, status, jqxhr) {
		alert("User updated!");			
  	}).fail(function() {
		alert("problems");
	});
	
}
