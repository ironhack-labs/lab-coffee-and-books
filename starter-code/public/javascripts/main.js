$(document).ready(function(){
    const sol = {
      lat: 40.417080,
      lng: -3.703612
    };
  
  const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: sol
    });

    const bounds = new google.maps.LatLngBounds();
    let markers = [];
    places.forEach(function(place){
        let title = place.name;
        let position = {
        lat: place.location.coordinates[0],
        lng: place.location.coordinates[1]
        };
        var pin = new google.maps.Marker({ position, map, title  });
        bounds.extend({lat:position.lat,lng:position.lng});
        markers.push(pin)
    });

    map.fitBounds(bounds);
  });