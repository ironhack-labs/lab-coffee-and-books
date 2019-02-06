document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
    
    if (navigator.geolocation) {

      // Get current position
      // The permissions dialog will pop up
      navigator.geolocation.getCurrentPosition(function (position) {
        // Create an object to match Google's Lat-Lng object format
        const center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log('center: ', center)
        // User granted permission
        // Center the map in the position we got
      }, function () {
        // If something goes wrong
        console.log('Error in the geolocation service.');
      });
    } else {
      // Browser says: Nah! I do not support this.
      console.log('Browser does not support geolocation.');
    }

  
    function startMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: {lat:40.416775 , lng:-3.703790},
        zoom: 15
      });
    }

    let map;

    startMap();

    function showMarkers() {
      axios.get(`http://localhost:3000/place`).then(places => {
        places.data.forEach(place => {
          new google.maps.Marker({
            map: map,
            position: {
              lat: place.location.coords.lat,
              lng: place.location.coords.lng
            },
            title: place.name
          });
        });
      });
    }

    showMarkers();
  },
  false
);

