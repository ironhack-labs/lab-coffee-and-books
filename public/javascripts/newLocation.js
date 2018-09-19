document.addEventListener('DOMContentLoaded', () => {




  const setPosOnForm = (latlng) => {
    document.getElementById('lat-pos').value = latlng.lat;
    document.getElementById('lng-pos').value = latlng.lng;
  }

  let marker;

  map.addEventListener('click', function (e) {

    const clickPos = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    }
    console.log(clickPos);
    marker.setPosition(clickPos);
    setPosOnForm(clickPos)
  });

  geolocate().then(center => {
    map.setCenter(center);
    marker = new google.maps.Marker({
      position: center,
      map: map
    });
    setPosOnForm(center);
  });

}, false);