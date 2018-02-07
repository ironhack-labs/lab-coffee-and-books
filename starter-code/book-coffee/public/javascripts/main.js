function main () {
  function startMap () {
    const ironhackBCN = { lat: 41.3977381, lng: 2.190471916 };

    // Map initialization
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: ironhackBCN
    });

    // Add a marker for Ironhack Barcelona
    const IronHackBCNMarker = new google.maps.Marker({
      position: {
        lat: ironhackBCN.lat,
        lng: ironhackBCN.lng
      },
      map: map,
      title: 'Barcelona Campus'
    });

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
}

window.onload = main;
