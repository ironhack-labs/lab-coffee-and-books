function main() {
    console.log(google);
    // Map initialization
    var map = new google.maps.Map(document.getElementById('map-container'), {
        zoom: 15
    });
    // Add a marker for Ironhack Barcelona

    // Try to get a geolocation object from the web browser
if (navigator.geolocation) {
    // Get current position
    // The permissions dialog will popup
    navigator.geolocation.getCurrentPosition(function (position) {
      // Create an object to match
      // google's Lat-Lng object format
      const center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log('center: ', center)

      map.setCenter(center);

      var IronHackBCNMarker = new google.maps.Marker({
        position: {
          lat: center.lat,
          lng: center.lng
        },
        map: map,
        title: "Barcelona Campus"
      });
      // User granted permission
      // Center the map in the position we got


      
    }, function () {
      // If something else goes wrong
      console.log('Error in the geolocation service.');
    });
  } else {
    // Browser says: Nah! I do not support this.
    console.log('Browser does not support geolocation.');
  }
}

window.onload = main;