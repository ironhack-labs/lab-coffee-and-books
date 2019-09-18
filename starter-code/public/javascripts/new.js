function startMap() {
  const latitudeInput = document.getElementById('lat')
  const longitudeInput = document.getElementById('lng')
  
  const ironhackBCN = {
    lat: 41.3977381,
    lng: 2.190471916
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: ironhackBCN
  });

  let marker = new google.maps.Marker({
    position: ironhackBCN,
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
