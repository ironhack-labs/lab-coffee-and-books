function startMap() {
    var ironhackBCN = {
        lat: 31.3977381,
        lng: 2.190471916};
    var map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 15,
        center: ironhackBCN
      }
    );
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const user_location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          // Center map with user location
          map.setCenter(user_location);

          // Add a marker for your user location
          var ironHackBCNMarker = new google.maps.Marker({
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
}

startMap();


// var myMarker = new google.maps.Marker({
//     position: {
//         lat: 41.3977381,
//         lng: 2.190471916
//     },
//     setMap: map,
//     title: "I'm here"
//   });
