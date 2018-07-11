document.addEventListener('DOMContentLoaded', () => {
var map;

  function initMap(){
    
  }

  function startMap() {
    const ironhackBCN = {
      lat: 41.3977381,
      lng: 2.190471916
    };
    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 15,
        center: ironhackBCN
      }
    );

    const myMarker = new google.maps.Marker({
      position: {
        lat: 41.3977381,
        lng: 2.190471916
      },
      map: map,
      title: "I'm here"
    });
    return map;
  }

  map=startMap();

  function geoInit() {
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
  }


  geoInit();



}, false);
