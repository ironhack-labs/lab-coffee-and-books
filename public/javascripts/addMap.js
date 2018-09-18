document.addEventListener('DOMContentLoaded', () => {


  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
  });
  const formPlacePosition = (position) => {
    document.getElementById('latitudeForm').value = position.lat;
    document.getElementById('longitudeForm').value = position.lng;
  }

  let marker;

  map.addListener('click', function(e) {
    const clickPos = {
      lat:e.latLng.lat(),
      lng:e.latLng.lng()
    }
    console.log(clickPos);
    marker.setPosition(clickPos);
    formPlacePosition(clickPos)
  });

  geolocalize().then(center => {
    map.setCenter(center);
    marker = new google.maps.Marker({
      position: center,
      map: map,
      label: label
    });
    formPlacePosition(center);
  });

}, false);
