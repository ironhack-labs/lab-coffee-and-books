$(document).ready(() => {

  const sol = {
    lat: 40.417080,
    lng: -3.703612
  };

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: sol
  });

  const geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });

  function geocodeAddress(geocoder, resultsMap) {
    let address = document.getElementById('address').value;

    geocoder.geocode({
      'address': address
    }, function(results, status) {

      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        let marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        document.getElementById('lat').value = results[0].geometry.location.lat();
        document.getElementById('long').value = results[0].geometry.location.lng();
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
});
