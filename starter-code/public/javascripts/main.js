$(document).ready(function() {
  // var ironhackParis = {
  //   lat: 48.874745,
  //   lng: 2.337665
  // };

  let markers = [];
  myPlaces.forEach(function(place) {
    let title = place.nameplace.name;
    let position = {
      lat: place.location.coordinates[1],
      lng: place.location.coordinates[0]
    };
    var pin = new google.maps.Marker({ position, map, title });
    markers.push(pin);
  });
});

var map = new google.maps.Map(document.getElementById("map"), {
  zoom: 15,
  center: { lat: 48.874745, lng: 2.337665 }
});

var center = {
  lat: undefined,
  lng: undefined
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(center);
      getRestaurant();
    },
    function() {
      console.log("Error in the geolocation service.");
    }
  );
} else {
  console.log("Browser does not support geolocation.");
}

function deleteMarkers() {
  markers.forEach(function(marker) {
    marker.setMap(null);
    marker = null;
  });
  markers = [];
}

function getRestaurant() {
  $.ajax({
    url: "http://localhost:3000/api",
    method: "GET",
    success: placeRestaurants,
    error: function(error) {
      console.log("error");
    }
  });
}

function placeRestaurants(restaurants) {
  restaurants.forEach(function(restaurant) {
    var center = {
      lat: restaurant.location.coordinates[1],
      lng: restaurant.location.coordinates[0]
    };
    var pin = new google.maps.Marker({
      position: center,
      map: map,
      title: restaurant.name
    });
    markers.push(pin);
  });
}
