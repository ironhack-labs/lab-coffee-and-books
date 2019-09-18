function startMap() {
  const latitudeInput = document.getElementById("lat");
  const longitudeInput = document.getElementById("lng");

  const ironhackBCN = {
    lat: 41.3977381,
    lng: 2.190471916
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: ironhackBCN
  });

  let marker = new google.maps.Marker({
    position: { lat: +latitudeInput.value, lng: +longitudeInput.value },
    map: map
  });

  axios.get("/api/places").then(places => {
    console.log(places);
    places.data.forEach(place => {
      new google.maps.Marker({
        draggable: true,
        position: {
          lat: +place.location.lat,
          lng: +place.location.lng
        },
        title: place.name,
        map
      });
    });
  });

  map.addListener("click", e => {
    latitudeInput.value = e.latLng.lat();
    longitudeInput.value = e.latLng.lng();
    marker.setMap(null)
    marker = new google.maps.Marker({
      position: { lat: +latitudeInput.value, lng: +longitudeInput.value },
      map: map
    })
    // marker.position.lat = latitudeInput.value;
    // marker.position.lng = longitudeInput.value;
  });
}

// function initMap() {
//   // var myLatLng = {lat: -25.363, lng: 131.044};

//   // var map = new google.maps.Map(document.getElementById('map'), {
//   //   zoom: 4,
//   //   center: myLatLng
//   // });
// }

startMap();
