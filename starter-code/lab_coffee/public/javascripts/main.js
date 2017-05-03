/*jshint esversion: 6*/
$(document).ready(function(){
  const sol = {
    lat: 40,
    lng: -4
  };
  const map = new google.maps.Map(document.getElementById('map'),{
    zoom : 8,
    center: sol
  });
  let markers = [];
  myPlaces.forEach(function(places){
    let title = places.name;
    let position = {
      lat: places.location.coordinates[1],
      lng: places.location.coordinates[0]
    };
    var pin = new google.maps.Marker({position:position, map: map, title: title});
    markers.push(pin);
  });
});
