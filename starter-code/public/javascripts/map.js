
const axios = require('axios');

function startMap () {
  axios.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyCm3O8yKtAM0qhv-2hcHyiGK5XfTiTMoEw')
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log('error pulling information');
      return err;
    });

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: [position.coords.lat, position.coords.lng]
  });

  // Add a marker for Ironhack Barcelona
  const Marker = new google.maps.Marker({
    position: {
      lat: position.coords.lat,
      lng: position.coords.lng
    },
    map: map,
    title: 'Barcelona Campus'
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const user_location = {
        lat: position.coords.lat,
        lng: position.coords.lng
      };

      // Center map with user location
      map.setCenter(user_location);

      // Add a marker for your user location
      const newMarker = new google.maps.Marker({
        position: {
          lat: user_location.lat,
          lng: user_location.lng
        },
        map: map,
        title: 'You are here'
      });
    }, function () {
      console.log('Error in the geolocation service.');
    });
  } else {
    console.log('Browser does not support geolocation.');
  }
}

startMap();
