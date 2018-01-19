$(document).ready(function () {
  const sol = {
    lat: 48,
    lng: 2.35
  };

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: sol
  });

  let markers = []; // empty array for following markers

  myPlaces.forEach(place => {
    let name = place.name;
    let position = {
      lat: place.location.coordinates[1],
      lng: place.location.coordinates[0]
    };
    var pin = new google.maps.Marker({
      position,
      map,
      name
    });
    markers.push(pin);
  });
});