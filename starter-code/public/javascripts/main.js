$(document).ready(function(){
  var markers = []
  const sol = {
    lat: 40.4082207,
    lng: -3.7110677,
  }

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: sol
  });

  var center = {
    lat: undefined,
    lng: undefined,
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(center);
      // getStores();
    }, function () {
      console.log('Error in the geolocation service.');
    });
  } else {
    console.log('Browser does not support geolocation.');
  }

  // document.getElementById('submit').addEventListener('click', function() {
  //   $.ajax({
  //     url: "http://localhost:3000/api/search?lat=" + center.lat + "&lng=" + center.lng + "&dis=" + document.getElementById('maxDistance').value,
  //     method: 'GET',
  //     success: function(stores) {
  //       console.log('stores', stores);
  //       deleteMarkers();
  //       placeStores(stores);
  //     },
  //     error: function(error) {
  //       console.log('error');
  //     }
  //   });
  // });

  // function deleteMarkers() {
  //   markers.forEach(function(marker) {
  //     marker.setMap(null);
  //     marker = null;
  //   })
  //   markers = [];
  // }
  //
  // function getStores() {
  //   $.ajax({
  //     url: "http://localhost:3000/api",
  //     method: 'GET',
  //     success: placeStores,
  //     error: function(error) {
  //       console.log(error);
  //     }
  //   });
  // }
  //
  // function placeStores(stores){
  //   stores.forEach(function(store){
  //     var center = {
  //       lat: store.location.coordinates[0],
  //       lng: store.location.coordinates[1]
  //     };
  //     var pin = new google.maps.Marker({
  //       position: center,
  //       map: map,
  //       title: store.name
  //     });
  //     markers.push(pin)
  //   });
  // }

});
