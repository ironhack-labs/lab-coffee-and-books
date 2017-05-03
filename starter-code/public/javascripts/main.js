$(document).ready(function(){
  var ironhackBCN = {
    lat: 41.3977381,
    lng: 2.090471916
  };

  var markers = [];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: ironhackBCN
  });

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
      getLibrary();
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
      success: function(Library) {
        console.log('Library', Library);
        deleteMarkers();
        placeLibrary(Library);
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

  function getLibrary() {
    $.ajax({
      url: "http://localhost:3000/api",
      method: 'GET',
      success: placeLibrary,
      error: function(error) {
        console.log('error');
      }
    });
  }

  function placeLibrary(Library){
    Library.forEach(function(Library){
      var center = {
        lat: Library.location.coordinates[1],
        lng: Library.location.coordinates[0]
      };
      var pin = new google.maps.Marker({
        position: center,
        map: map,
        title: Library.name
      });
      markers.push(pin)
    });
  }

});
