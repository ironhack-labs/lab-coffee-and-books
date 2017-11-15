$(document).ready(function() {

  function startMap() {
    var ironhackBCN = {
      lat: 41.3977381,
      lng: 2.190471916
    };
    var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 15,
        center: ironhackBCN
      }
    );
    var myMarker = new google.maps.Marker({
      position: {
        lat: 41.3977381,
        lng: 2.190471916
      },
      map: map,
      title: "I'm here"
    });
  }
  startMap();

  //   document.getElementById('submit').addEventListener('click', function() {
  //     $.ajax({
  //       url: "http://localhost:3000/api/search?lat=" + center.lat + "&lng=" + center.lng + "&dis=" + document.getElementById('maxDistance').value,
  //       method: 'GET',
  //       success: function(places) {
  //         console.log('places', places);
  //         deleteMarkers();
  //         locationPlaces(places);
  //       },
  //       error: function(error) {
  //         console.log('error');
  //       }
  //     });
  //   });
  //
  //   function deleteMarkers() {
  //     markers.forEach(function(marker) {
  //       marker.setMap(null);
  //       marker = null;
  //     })
  //     markers = [];
  //   }
  //
  //   function getPlaces() {
  //     $.ajax({
  //       url: "http://localhost:3000/api",
  //       method: 'GET',
  //       success: locationPlaces,
  //       error: function(error) {
  //         console.log('error');
  //       }
  //     });
  //   }
  //
  //   function locationPlaces(places){
  //     restaurants.forEach(function(places){
  //       var center = {
  //         lat: place.location.coordinates[1],
  //         lng: place.location.coordinates[0]
  //       };
  //       var pin = new google.maps.Marker({
  //         position: center,
  //         map: map,
  //         title: place.name
  //       });
  //       markers.push(pin)
  //     });
  //   }

});
