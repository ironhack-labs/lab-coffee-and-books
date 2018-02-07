

$(document).ready(function(){

  // Create and Initialize Map
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: [41.3977381, 2.090471916]
  });

  // Add restaurant markers to map
  let markers = [];
  myPlaces.forEach(function(p){
    let name = p.name
    let location = {
      lat: p.location.lat,
      lng: p.location.lng
    }
    let kind = p.kind 

    });
    var pin = new google.maps.Marker({ location, map, name });
    markers.push(pin)
  });