//var BASE_URI="http://localhost:8080/where";
var BASE_URI="http://147.83.7.206:8080/where";


function linksToMap(links){
	var map = {};
	$.each(links, function(i, link){
		$.each(link.rels, function(j, rel){
			map[rel] = link;
		});
	});

	return map;
}


function loadAPI(complete){
	$.get(BASE_URI)
		.done(function(data){
			var api = linksToMap(data.links);
			sessionStorage["api"] = JSON.stringify(api);
			complete();
		})
		.fail(function(data){
		});
}


function login(loginid, password, complete){
	loadAPI(function(){
		var api = JSON.parse(sessionStorage.api);
		var uri = api.login.uri;
		$.post(uri,
			{
				login: loginid,
				password: password
			}).done(function(authToken){
				authToken.links = linksToMap(authToken.links);
				sessionStorage["auth-token"] = JSON.stringify(authToken);
				complete();
			}).fail(function(jqXHR, textStatus, errorThrown){
				var error = jqXHR.responseJSON;
				alert(error.reason);
			}
		);
	});
}


function logout(complete){
	var authToken = JSON.parse(sessionStorage["auth-token"]);
	var uri = authToken["links"]["logout"].uri;
	console.log(authToken.token);
	$.ajax({
    	type: 'DELETE',
   		url: uri,
    	headers: {
        	"X-Auth-Token":authToken.token
    	}
    }).done(function(data) { 
    	sessionStorage.removeItem("api");
    	sessionStorage.removeItem("auth-token");
    	complete();
  	}).fail(function(){});
}


function getCurrentUserProfile(complete){
	var authToken = JSON.parse(sessionStorage["auth-token"]);
	var uri = authToken["links"]["user-profile"].uri;
	$.get(uri)
		.done(function(user){
			user.links = linksToMap(user.links);
			complete(user);
		})
		.fail(function(){});
}


function loadStings(uri, complete){
	// var authToken = JSON.parse(sessionStorage["auth-token"]);
	// var uri = authToken["links"]["current-stings"].uri;
	$.get(uri)
		.done(function(stings){
			stings.links = linksToMap(stings.links);
			complete(stings);
		})
		.fail(function(){});
}

function getSting(uri, complete){
	$.get(uri)
		.done(function(sting){
			complete(sting);
		})
		.fail(function(data){
		});
}


function CreateUser (user){
	var url = BASE_URI + '/users';
	var data = JSON.stringify(user);
		$.post(url,
			{
				loginid: user.loginid,
				password: user.password,
				email: user.email,
				fullname: user.fullname

	}).done(function(data, status, jqxhr) {
		alert("You created user:" + user.loginid + " with password: " + user.password + ". Please Log in!");
        window.location = 'login.html';			
  	}).fail(function() {
		alert("problems");
	});
}


function CreateRes (restaurant){
	var url = BASE_URI + '/restaurant';
	var authToken = JSON.parse(sessionStorage["auth-token"]);
				
	$.ajax({
     type: 'POST',
     url: url,
	 data: $.param(restaurant),
	 
     headers: {
         "X-Auth-Token":authToken.token
     },
     statusCode: {
				200: function(data, status, jqxhr) {
				    alert("You created restaurant:" + restaurant.name);
                    window.location='main.html';
                },
                400: function(){
                    alert("We have some problems, please try again later. \n Tip: Check the input data.");
                }
                }
	});
}


function check(){
	var authToken = JSON.parse(sessionStorage["auth-token"]);
	var url = BASE_URI + '/login/' + authToken.userid;

		
		$.ajax({
		type: 'GET',
		url: url,
		data: $.param(login),
	headers: {
        "X-Auth-Token":authToken.token
		
    }
	}).done(function(data, status, jqxhr) {
		window.location.replace('admin.html');
  	}).fail(function() {
		alert("You are not admin or owner!");
	});
}


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};


function getRestaurant() {//finally function not used
	var id = getUrlParameter('id');
	var authToken = JSON.parse(sessionStorage["auth-token"]);
	var url = BASE_URI + "/restaurant/"; + id;

		
			$.ajax({
			url : url,
			type : 'GET',
			crossDomain : true,
			dataType : 'json',
			 }).done(function(data, status, jqxhr) {
			});
  

}


function getRestaurants(){
   var url = BASE_URI + "/restaurant";
   $("#restaurantes_result").text('');
   
   $.ajax({
      url : url,
      type : 'GET',
      crossDomain : true,
      dataType : 'json',
   }).done(function(data, status, jqxhr) {
				var restaurant = data.restaurants;
				$.each(restaurant, function(i, v) {
					var restaurant = v;
					$('<br><strong> Name: ' + restaurant.name + '</strong><br>').appendTo($('#restaurantes_result'));
					$('<strong> Description: </strong> ' + restaurant.description + '<br>').appendTo($('#restaurantes_result'));
					$('<button><a href="details.html?id='+ restaurant.id +'" <h4>' + "Go to details!" +'</h4></a></button>').appendTo($('#restaurantes_result'));
					$('<p>').appendTo($('#restaurantes_result')); 
				});
   }).fail(function() {
      $("#restaurantes_result").text("No restaurants!");
   });
}


function getDetails(){
   var id = getUrlParameter('id');
   var authToken = JSON.parse(sessionStorage["auth-token"]);
   var url = BASE_URI + "/restaurant/" + id;
   $("#details_result").text('');
   
   $.ajax({
      url : url,
      type : 'GET',
      crossDomain : true,
      dataType : 'json',
	  headers: {
	  "X-Auth-Token":authToken.token
	  }
   }).done(function(data, status, jqxhr) {
			var restaurant = data;

					$('<br><strong> Name: ' + restaurant.name + '</strong><br>').appendTo($('#details_result'));
					$('<strong> Description: </strong> ' + restaurant.description + '<br>').appendTo($('#details_result'));
					$('<strong> Average price: </strong> ' + restaurant.avgprice + ' &#8364' + '<br>').appendTo($('#details_result'));
					$('<strong> Adress: </strong> ' + restaurant.address + '<br>').appendTo($('#details_result'));
                    $('<strong> Likes: </strong> ' + restaurant.likes + '<br>').appendTo($('#details_result'));
					$('<strong> Phone: </strong> ' + restaurant.phone + '<br>').appendTo($('#details_result'));
					
   }).fail(function() {
      $("#details_result").text("Restaurant not exist!");
   });
}


function CreateComment (comment){
	var id = getUrlParameter('id');
	var url = BASE_URI + '/restaurant/' + id + '/comments';
	//var data = JSON.stringify(restaurant);
	var authToken = JSON.parse(sessionStorage["auth-token"]);
	
	$.ajax({
     type: 'POST',
     url: url,
	 data: $.param(comment),
	 
     headers: {
         "X-Auth-Token":authToken.token
     }
	}).done(function(data, status, jqxhr) {
		alert("You created comment");
        window.location.reload();
  	}).fail(function() {
		alert("Problems! Probably you already commented this Restaurant!");
	});
}


function getComments(){
    var id = getUrlParameter('id');
   var url = BASE_URI + "/restaurant/" + id + "/comments";
   console.log(url);
   $("#comments_result").text('');
   
   $.ajax({
      url : url,
      type : 'GET',
      crossDomain : true,
      dataType : 'json',
   }).done(function(data, status, jqxhr) {
				var comment = data.comments;
				
				$.each(comment, function(i, v) {
					var comment = v;
					
					var vote;
					if (comment.likes==0){vote = "&#128078";
					}else {vote = "	&#128077";};
					var vote = vote.fontsize(6);
					$('<br><strong> Title: ' + comment.title + '</strong><br>').appendTo($('#comments_result'));
					$('<strong> Comment: </strong> ' + comment.comment + '<br>').appendTo($('#comments_result'));
                    $('<strong> Owner response: </strong> ' + comment.response + '<br>').appendTo($('#comments_result'));
					$('<strong> Vote: </strong> ' + vote + '<br>').appendTo($('#comments_result'));
					$('<button type="button" onClick="deleteComment(\''+ comment.id + '\');">Delete</button><span id="delate_comment_result"></span>').appendTo($('#comments_result'));
                    $('<br><strong> Response: </strong> <br>').appendTo($('#comments_result'));
                    $('<input type="text" id="response_text"><br>').appendTo($('#comments_result'));
                    $('<button type="button" onClick="responseComment(\''+ comment.id + '\');">Response</button><span id="response_comment_result"></span>').appendTo($('#comments_result'));
					$('<p>').appendTo($('#comments_result')); 
				});
   }).fail(function() {
      $("#comments_result").text("No comments!");
   });
}


function getRestaurantByName(name){
   var url = BASE_URI + "/restaurant/search/" + name;
   var authToken = JSON.parse(sessionStorage["auth-token"]);
   $("#search_result").text('');
   
   $.ajax({
      url : url,
      type : 'GET',
      crossDomain : true,
      dataType : 'json',
	   headers: {
         "X-Auth-Token":authToken.token
       }
   }).done(function(data, status, jqxhr) {
				var restaurant = data.restaurants;
				
				$('<br><h4> Search result: </h4><br>').appendTo($('#search_result'));
				
				$.each(restaurant, function(i, v) {
					var restaurant = v;
					
					$('<br><strong> Name: ' + restaurant.name + '</strong><br>').appendTo($('#search_result'));
					$('<strong> Description: </strong> ' + restaurant.description + '<br>').appendTo($('#search_result'));
					$('<button><a href="details.html?id='+ restaurant.id +'" <h4>' + "Go to details!" +'</h4></a></button>').appendTo($('#search_result'));
					$('<a href="posicion.html?id='+ restaurant.id +'" <h4>'  +'</h4></a>');
					$('<p>').appendTo($('#search_result')); 
					$('<p>').appendTo($('#search_result')); 
				});
   }).fail(function() {
      $("#search_result").text("No matches found with " + name + " try another word!");
	  $('<p>').appendTo($('#search_result')); 
	  $('<p>').appendTo($('#search_result')); 
   });
}


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
	
function initMap() {
    var id = getUrlParameter('id');
	var url = BASE_URI + "/restaurant/" + id;
	
			$.ajax({
			url : url,
			type : 'GET',
			crossDomain : true,
			dataType : 'json',
			 }).done(function(data, status, jqxhr) {
				var restaurant = data;
			  
				var myLatLng = {lat: restaurant.lat, lng: restaurant.lng};
				var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 8,
				center: myLatLng
				});

				var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: restaurant.name
				});
				
			}).fail(function() {
      $("#details_result").text("Problem with localisation of restaurant");
   });
  

}