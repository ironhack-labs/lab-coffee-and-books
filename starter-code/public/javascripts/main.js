/*jshint esversion: 6*/

$(document).ready(function(){

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
  });

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function (position) {

      center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(center);
    }, function () {
      console.log('Error in the geolocation service.');
    });
  } else {
    console.log('Browser does not support geolocation.');
  }

  let markers = [];
  placesArr.forEach(function(place){
    let title = place.name;
    let position = {
      lat: place.location.coordinates[1],
      lng: place.location.coordinates[0]
    };
    var pin = new google.maps.Marker({ position, map, title  });
    markers.push(pin);
  });
  //
  //
  // var center = {
  //   lat: undefined,
  //   lng: undefined
  // };
  //
  //
  //
  //
  // document.getElementById('submit').addEventListener('click', function() {
  //   $.ajax({
  //     url: "http://localhost:3000/api/search?lat=" + center.lat + "&lng=" + center.lng + "&dis=" + document.getElementById('maxDistance').value,
  //     method: 'GET',
  //     success: function(restaurants) {
  //       console.log('restaurants', restaurants);
  //       deleteMarkers();
  //       placeRestaurants(restaurants);
  //     },
  //     error: function(error) {
  //       console.log('error');
  //     }
  //   });
  // });
  //
  // function deleteMarkers() {
  //   markers.forEach(function(marker) {
  //     marker.setMap(null);
  //     marker = null;
  //   });
  //   markers = [];
  // }

  // function getRestaurant() {
  //   $.ajax({
  //     url: "http://localhost:3000/api",setCenter
  //     method: 'GET',
  //     success: placeRestaurants
  //     }
  //   );
  // }
  //
  // function placeRestaurants(restaurants){
  //   restaurants.forEach(function(restaurant){
  //     var center = {
  //       lat: restaurant.location.coordinates[1],
  //       lng: restaurant.location.coordinates[0]
  //     };
  //     var pin = new google.maps.Marker({
  //       position: center,
  //       map: map,
  //       title: restaurant.name
  //     });
  //     markers.push(pin);
  //   });
  // }

});
