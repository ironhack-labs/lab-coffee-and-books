/*jshint esversion: 6*/
$(document).ready(function(){
  const nuevosMinisterios = {
    lat: 40.443473,
    lng: -3.692545
  };

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: nuevosMinisterios
  });
  let markers = [];
    myPlaces.forEach(function(place){
      let title = place.name;
      let position = {
        lat: place.location.coordinates[1],
        lng: place.location.coordinates[0]
      };
      var pin = new google.maps.Marker({ position, map, title  });
      markers.push(pin);
    });
});
