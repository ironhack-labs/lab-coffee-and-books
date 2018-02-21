function startMap(){
    var ironhackMEX = {
      lat: 19.4021721, 
      lng: -99.1891731
    };
  
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: ironhackMEX
    });
  
      let title = myPlace.name
      let position = {
        lat: myPlace.location.coordinates[1],
        lng: myPlace.location.coordinates[0]
      };
      var pin = new google.maps.Marker({ 
        position: position,
        map: map,
        label: title});

    
  }
  
  startMap()