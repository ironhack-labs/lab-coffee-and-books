/*jshint esversion: 6*/

$(document).ready(function() {
  const sol = {
    lat: 40.417080,
    lng: -3.703612
  };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: sol
  });
  let title = myPlace.name;
  let position = {
    lat: myPlace.location.coordinates[1],
    lng: myPlace.location.coordinates[0]
  };
  var pin = new google.maps.Marker({
    position,
    map,
    title
  });
  map.setCenter(position);
});
