$(document).ready(() => {

  console.log(myPlaces);
  const sol = {
    lat: 40.417080,
    lng: -3.703612
  };

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: sol
  });

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
