// main.js
function startMap() {
  var ironhackParis = {
  	lat: 48.8749758,
  	lng: 2.3355818};

  var map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 15,
      center: ironhackParis,
    }
  );

  // Add place markers to map
    let markers = [];
    myPlaces.forEach(function(place){
      let title = place.name;
      let position = {
        lat: place.location.coordinates[1],
        lng: place.location.coordinates[0]
      };
      console.log(map)
      var pin = new google.maps.Marker({ position, map, title  });
      markers.push(pin)
    });


}







startMap();
