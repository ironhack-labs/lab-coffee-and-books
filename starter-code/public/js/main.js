// javascripts/main.js
$(document).ready(function(){
console.log('inside main');
  // Create and Initialize Map
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat:40.4235319,lng: -3.7022722}
  });
console.log(places);
  // Add shop markers to map
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
