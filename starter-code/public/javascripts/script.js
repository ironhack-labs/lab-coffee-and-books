document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

window.onload = () => {
  startMap();
}

function startMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let mylocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
     let placesMap = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: mylocation
      });
      const myMarker = new google.maps.Marker({
        position: {
          lat: mylocation.lat,
          lng: mylocation.lng
        },
        map: placesMap,
        title: "Here you are!"
      });

    }, function () {
      console.log('Error in the geolocation service.');
    });
  } else {
    console.log('Browser does not support geolocation.');
  }
}


