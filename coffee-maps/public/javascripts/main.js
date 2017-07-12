$(document).ready(function() {
  const myGeo = {
    lat: 40.417080,
    lng: -3.703612
  };

  // Create and Initialize Map
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myGeo
  });


  // Add places markers to map
  let markers = [];
  myPlaces.forEach(function(places) {
    let title = places.nameplaces.name;
    let position = {
      lat: places.location.coordinates[1],
      lng: places.location.coordinates[0]
    };
    var pin = new google.maps.Marker({
      position,
      map,
      title
    });
    markers.push(pin);
  });


});
