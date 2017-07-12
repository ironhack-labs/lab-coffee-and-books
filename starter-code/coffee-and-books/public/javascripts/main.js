$(document).ready(function(){

  const sol = {
  lat: 40.417080,
  lng: -3.703612
};

const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: sol
});

var markers = [];

var center = {
  lat: undefined,
  lng: undefined
};


  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function (position) {

      center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(center);
      getPlaces();
    }, function () {
      console.log('Error in the geolocation service.');
    });
  } else {
    console.log('Browser does not support geolocation.');
  }

  document.getElementById('submit').addEventListener('click', function() {
    $.ajax({
      url: "http://localhost:3000/api/search?lat=" + center.lat + "&lng=" + center.lng + "&dis=" + document.getElementById('maxDistance').value,
      method: 'GET',
      success: function(restaurants) {
        console.log('restaurants', restaurants);
        deleteMarkers();
        placeRestaurants(restaurants);
      },
      error: function(error) {
        console.log('error');
      }
    });
  });

  function deleteMarkers() {
    markers.forEach(function(marker) {
      marker.setMap(null);
      marker = null;
    })
    markers = [];
  }

  function getPlaces() {
    $.ajax({
      url: "http://localhost:3000/api",
      method: 'GET',
      success: printPlaces,
      error: function(error) {
        console.log('error');
      }
    });
  }

  function printPlaces(places){
    places.forEach(function(places){
      var center = {
        lat: places.location.coordinates[0],
        lng: places.location.coordinates[1]
      };
      var pin = new google.maps.Marker({
        position: center,
        map: map,
        title: places.name
      });
      markers.push(pin)
    });
  }

});
