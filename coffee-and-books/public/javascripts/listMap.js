document.addEventListener('DOMContentLoaded', () => {
    const map = new google.maps.Map(document.getElementById('map'), {
     zoom: 13,
   });
   geolocalize().then(center => {
     map.setCenter(center);
      placesStr.forEach(place => {
       new google.maps.Marker({
         position: {
           lat:place.location.coordinates[0],
           lng:place.location.coordinates[1]
         },
         map: map,
         title: place.name
       });
     })
    });
  }, false);