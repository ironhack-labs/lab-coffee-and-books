$(document).ready(function(){

  // Create and Initialize Map
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {
            lat: 41.3977381,
            lng: 2.090471916
        }

  });

  console.log(map)
  // Add restaurant markers to map
  let markers = [];
  myPlace.forEach(function(place){
    let title = place.name
    let position = {
      lat: place.location.coordinates[1],
      lng: place.location.coordinates[0]
    };


    var pin = new google.maps.Marker({ position, map, title  });
    markers.push(pin)
  });
});
