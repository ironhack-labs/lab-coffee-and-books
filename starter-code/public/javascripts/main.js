window.onload = function(){
    
    // Create and Initialize Map
    const sol = {
        lat: 40.417080,
        lng: -3.703612
    }
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: sol
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
    markers.push(pin)
  });
  
  };
//   var myMarker = new google.maps.Marker({
//     position: {
//         lat: 41.3977381, 
//         lng: 2.190471916
//     },
//     map: map,
//     title: "I'm here"
//   });