document.addEventListener('DOMContentLoaded', () => {

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
  });

  const setPosOnForm = (latlng) => {
    document.getElementById('lat-pos').value = latlng.lat;
    document.getElementById('lng-pos').value = latlng.lng;

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


}, false);