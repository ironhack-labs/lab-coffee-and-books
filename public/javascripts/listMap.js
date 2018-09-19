document.addEventListener('DOMContentLoaded', () => {
  
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
  });
  geolocalize().then(center => {
    map.setCenter(center);
    
    window.coffees.forEach(e => {
      const IronHackBCNMarker = new google.maps.Marker({
        position: {
          lat: e.location.coordinates[0],
          lng: e.location.coordinates[1]
        },
        map: map,
        title: e.name
      });
      
    })
    

  });


}, false);