//var BASE_URI="http://localhost:8080/where";
var BASE_URI="http://147.83.7.206:8080/where";


function deleteComment(commentsid) {
	var id = getUrlParameter('id');
	var authToken = JSON.parse(sessionStorage["auth-token"]);
	var url = BASE_URI + '/restaurant/' + id + '/comments/' + commentsid;////????
	$("#delate_comment_result").text('');
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
				403: function() {
				alert( "This is not your comment!" );}
                }
				}).fail(function() {
							alert("Oh! Error... !");
							//$('<div class="alert alert-danger"> <strong>Oh!</strong> Error! </div>').appendTo($("#delate_comment_result"));
							}).done(function() {
							alert("Done! You deleted the comment!");
                            window.location.reload();
							//$('<div class="alert alert-success"> <strong>Done!</strong> You delate comment! </div>').appendTo($("#delate_comment_result"));;
							});
    
}

function responseComment(commentsid) {
	var id = getUrlParameter('id');
    response ={
        'response':$("#response_text").val()
        };
	var authToken = JSON.parse(sessionStorage["auth-token"]);
	var url = BASE_URI + '/restaurant/' + id + '/comments/' + commentsid;
    console.log(response);
	$("#delate_comment_result").text('');

		   $.ajax({
		
           name: authToken.userid,
           url : url,
           type : 'PUT',
           crossDomain : true,
           dataType : 'json',
		   contentType : 'application/x-www-form-urlencoded',
           data: $.param(response),
		   headers: {
			"X-Auth-Token":authToken.token
            },
            
             statusCode: {
				403: function() {
				alert( "You must be the owner of the restaurant to write a response!" );}}
				}).fail(function() {
							alert("Oh! Error... !");
							//$('<div class="alert alert-danger"> <strong>Oh!</strong> Error! </div>').appendTo($("#delate_comment_result"));
							}).done(function() {
							alert("Done! You've responded a comment!");
                            window.location.reload();
							//$('<div class="alert alert-success"> <strong>Done!</strong> You delate comment! </div>').appendTo($("#delate_comment_result"));;
							});
    
}


$(document).ready(function(){
	getDetails();
	var id = getUrlParameter('id');
	$('<object type="text/html" data="posicion.html?id='+id+'" width="380px" height="225px" style="overflow:auto;border:1px ridge #A9A9A9"></object>').appendTo($("#map"));
	
});


$("#create_comment").click(function(e) {
	e.preventDefault();
	if( $("#title").val() == "" || $("#comment").val() == "")// || $("#likes").val() == "" )
	{
		if($("#title").val() == "")
			{
				document.getElementById('title').style.background='#F6B5B5';
				$('#title').attr('placeholder','Fill it!');
			}
		//if($("#likes").val() == "")
		//	{
		//		document.getElementById('likes').style.background='#F6B5B5';
		//		$('#likes').attr('placeholder','Fill it!');
		//	}
		if($("#comment").val() == "")
			{
				document.getElementById('comment').style.background='#F6B5B5';
				$('#comment').attr('placeholder','Fill it!');
			}
	}
	else{
			var create = new Object();
			create.title=  $("#title").val();
			create.comment = $("#comment").val();
			console.log($("input:radio[name=puntuacion]:checked").val());
			create.likes = $("input:radio[name=puntuacion]:checked").val();
			CreateComment(create);		
	    }
});


$(document).ready(function(){
	getComments();
});


