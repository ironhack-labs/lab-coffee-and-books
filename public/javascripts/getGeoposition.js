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

// console.log
/* center:
  {
    lat: 41.39780037511012,
    lng: 2.1905911449111493
  } */
// (main.js, line 27)