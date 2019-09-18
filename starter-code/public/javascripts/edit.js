function startMap() {
  const latitudeInput = document.getElementById("lat");
  const longitudeInput = document.getElementById("lng");

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: {
      lat: +latitudeInput.value,
      lng: +longitudeInput.value
    }
  });

  let marker = new google.maps.Marker({
    position: { lat: +latitudeInput.value, lng: +longitudeInput.value },
    map: map
  });

  map.addListener("click", e => {
    latitudeInput.value = e.latLng.lat();
    longitudeInput.value = e.latLng.lng();
    marker.setMap(null)
    marker = new google.maps.Marker({
      position: { lat: +latitudeInput.value, lng: +longitudeInput.value },
      map: map
    })
  });
}

startMap();
