document.addEventListener('DOMContentLoaded', () => {
    
  const map = new google.maps.Map(document.getElementById('map'),{ 
    zoom: 15,
    center: {lat: 40.3925321, lng: -3.6982669000000215}
  });
  
  window.places.forEach(place => {
    new google.maps.Marker({
      position: {
        lat: place.location.coordinates[0],
        lng: place.location.coordinates[1]
      },
      map: map,
      title: place.name
    });
  })

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const user_location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      // Center map with user location
      map.setCenter(user_location);

      // Add a marker for your user location
      const ironHackBCNMarker = new google.maps.Marker({
        position: {
          lat: user_location.lat,
          lng: user_location.lng
        },
        map: map,
        title: "You are here"
      });

    }, function () {
      console.log('Error in the geolocation service.');
    });
  } else {
    console.log('Browser does not support geolocation.');
  }

}, false);
