document.addEventListener('DOMContentLoaded', () => {

  const MAD = {
    lat: 40.4378698,
    lng: -3.8196207
    
  };
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 15,
      center: MAD
    }
  );

  window.places.forEach( place => {
    new google.maps.Marker({
      position: {
        lat: place.location.coordinates[0],
        lng: place.location.coordinates[1]
      },
      map: map,
      title: `${place.name} - ${place.description}`
    });
  })


  map.addListener("click", function(event) {
          var lat = event.latLng.lat();
          var lng= event.latLng.lng();
          console.log(latitude)
          //$('#geolocalizacion').val(latitude + ", " + longitude);
          document.getElementById("lat").value= lat;
          document.getElementById("lng").value= lng;
    });


  const geolocate = () => {
    return new Promise((resolve, reject) => {
      // Try to get a geolocation object from the web browser
      if (navigator.geolocation) {

        // Get current position
        // The permissions dialog will popup
        navigator.geolocation.getCurrentPosition(function (position) {
          // Create an object to match
          // google's Lat-Lng object format
          console.log(position)
          const myPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log('myPosition: ', myPosition)
          resolve(myPosition);
        }, ()  => reject('Error in the geolocation service.')); // If something else goes wrong
      } else {
        reject('Browser does not support geolocation.'); // Browser says: Nah! I do not support this.

      }
    })
  }


  geolocate().then(position => {
    // User granted permission
     const myMarker = new google.maps.Marker({
       position,
       map: map,
       title: "I'm here"
     });
     map.setCenter(position);
 })


 



}, false);
