// javascripts/main.js
$(document).ready(function(){

  // Create and Initialize Map
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat:40.417080,lng: -3.703612}
  });
console.log(places);
  // Add restaurant markers to map
  let markers = [];
  places.forEach(function(e){
    let title = e.name;
    let position = {
      lat: e.location.coordinates[1],
      lng: e.location.coordinates[0]
    };

    var pin = new google.maps.Marker({ position, map, title  });
    markers.push(pin);
  });
});
