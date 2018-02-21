function startMap(){
    var ironhackMEX = {
      lat: 19.4021721, 
      lng: -99.1891731
    };
  
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: ironhackMEX
    });
  
    let markers = [];
    myPlaces.forEach(function(place, index){
      let title = place.name
      let position = {
        lat: place.location.coordinates[1],
        lng: place.location.coordinates[0]
      };
      var pin = new google.maps.Marker({ 
        position: position,
        map: map,
        label: title});
      markers.push(pin)
    });

    
  }
  
  startMap()
  
  function howFar(id){

    var ironhackMEX = {
        lat: 19.4021721, 
        lng: -99.1891731
      };
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionRequest = {
        origin: {
            lat: myPlaces[id].location.coordinates[1],
            lng: myPlaces[id].location.coordinates[0]},
        destination: ironhackMEX,
        travelMode: 'DRIVING'
      };
      
      directionsService.route(
        directionRequest,
        function(response, status) {
          if (status === 'OK') {
            // everything is ok
            directionsDisplay.setDirections(response);
      
          } else {
            // something went wrong
            window.alert('Directions request failed due to ' + status);
          }
        }
      );
      
      directionsDisplay.setMap(map);
  }
