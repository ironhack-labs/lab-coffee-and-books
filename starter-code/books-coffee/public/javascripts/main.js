$(document).ready(function(){
  const sol = {
    lat: 48.8745686,
    lng: 2.335433
  };

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: sol
  });

let markers = [];

myPlaces.forEach(function(place){
  let title = place.name; // strange thing here, maybe typo ?
  let position = {
    lat: place.location.coordinates[1],
    lng: place.location.coordinates[0]
  };
  var pin = new google.maps.Marker({ position, map, title  });
  markers.push(pin);
});

});
