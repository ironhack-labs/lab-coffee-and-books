document.addEventListener('DOMContentLoaded', () => {

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
  });

  const setPosOnForm = (latlng) => {
    document.getElementById('latitude').value = latlng.lat;
    document.getElementById('longitude').value = latlng.lng;

  }


  let marker;

  map.addListener('click', function(e) {
    const clickPos = {
      lat:e.latLng.lat(),
      lng:e.latLng.lng()
    }
    console.log(clickPos);
    marker.setPosition(clickPos);
    setPosOnForm(clickPos)
  });

  geolocalize().then(center => {
    map.setCenter(center);
    marker = new google.maps.Marker({
      position: center,
      map: map
    });
    setPosOnForm(center);
  });

  geolocalize().then(center => {
    map.setCenter(center);
    places.forEach(place => {
      console.log(place);
      new google.maps.Marker({
        position: {
          lat: place.location.coordinates[0],
          lng: place.location.coordinates[1]
        },
        map: map,
        title: place.name
      });
    });
  });


}, false);