

$("#button_go_create").click(function(e) {
   e.preventDefault();
   check();
});


$("#button_list_rest").click(function(e) {
   e.preventDefault();
 getRestaurant();
});


$(document).ready(function(){
	getRestaurants();
});


$("#button_search").click(function(e) {
	e.preventDefault();
	getRestaurantByName($("#get_name").val());
});