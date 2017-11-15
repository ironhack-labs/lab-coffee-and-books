function main() {
  var ironhackBCN = {
    lat: 0,
    lng: 0
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: ironhackBCN
  });
  var myMarker = new google.maps.Marker({
    position: {
      lat: 0,
      lng: 0
    },
    map: map,
    title: "Nearest bathroom",
    animation: google.maps.Animation.DROP
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const user_location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        // Center map with user location
        map.setCenter(user_location);
        map.setZoom(20);

        // Add a marker for your user location
        var YoureHereMarker = new google.maps.Marker({
          position: {
            lat: user_location.lat,
            lng: user_location.lng
          },
          map: map,
          title: "You are here"
        });
      },
      function() {
        console.log("Error in the geolocation service.");
      }
    );
  } else {
    console.log("Browser does not support geolocation.");
  }
}

startMap();

window.addEventListener("load", main);
