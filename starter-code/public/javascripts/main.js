$(document).ready(() => {

  let markers = []

  // Create and Initialize Map
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: { lat: 48.874745, lng: 2.337665 },
  })

  // Add restaurant markers to map
  myPlaces.forEach((place) => {
    let title = place.name
    let position = {
      lat: parseFloat(place.location.coordinates[1]),
      lng: parseFloat(place.location.coordinates[0])
    };
    var pin = new google.maps.Marker({ position, map, title });
    markers.push(pin)
  });

  const geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });

  function geocodeAddress(geocoder, resultsMap) {
    let address = document.getElementById('address').value;

    geocoder.geocode({ 'address': address }, function(results, status) {

      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        let marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        document.getElementById('lat').value = results[0].geometry.location.lat();
        document.getElementById('lng').value = results[0].geometry.location.lng();
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
});