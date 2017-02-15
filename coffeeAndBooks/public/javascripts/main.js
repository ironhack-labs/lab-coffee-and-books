var myPlaces;
$.ajax({
  url: "http://localhost:3000/api/places",
  method: "GET",
  success: function(result){
    myPlaces = result;
    const sol = {
      lat: 40.417080,
      lng: -3.703612
    };

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
      markers.push(pin);
      console.log(markers);
    });
  },
  error: function(err) {
    console.log(err);
  }  
});
