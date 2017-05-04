$(document).ready(function() {

    getRestaurant();
    
})

function getRestaurant() {
   $.ajax({
     url: "http://localhost:3000/api",
     method: 'GET',
     success: placeRestaurants,
     error: function(error) {
       console.log('error');
     }
   });
 }

 function placeRestaurants(restaurants){
    var center = {
       lat: restaurants[0].location.coordinates[1],
       lng: restaurants[0].location.coordinates[0]
     };
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: center
    })
   restaurants.forEach(function(restaurant){
     console.log(restaurant);
     var position = {
       lat: restaurant.location.coordinates[1],
       lng: restaurant.location.coordinates[0]
     };
     var pin = new google.maps.Marker({
       position: position,
       map: map,
       title: restaurant.name
     });
   });
 }