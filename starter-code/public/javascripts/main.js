/* jshint esversion: 6 */

$(document).ready(function(){
  const miamibeach = {
    lat: 25.949675,
    lng: -80.155220
  };

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: miamibeach
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




// 25.949675, -80.155220
