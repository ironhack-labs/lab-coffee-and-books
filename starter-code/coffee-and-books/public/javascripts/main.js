function initMap() {
  const sol = {
    lat: 40.417080,
    lng: -3.703612
  };

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: sol
  });
}


initMap();


$(document).ready(function(){

  // Create and Initialize Map
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: [41.3977381, 2.090471916]
  });

  // Add restaurant markers to map
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
