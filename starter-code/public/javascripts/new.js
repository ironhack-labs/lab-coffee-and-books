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
  axios.get("/api/places").then(places => {
    console.log(places)
    places.data.forEach(place => {
      new google.maps.Marker({
        position: {
          lat: place.location.lat,
          lng: place.location.lng
        },
        title: place.name,
        map
      });
    });
  });

  map.addListener('click', e => {
    latitudeInput.value = e.latLng.lat()
    longitudeInput.value = e.latLng.lng()
  })
}

startMap();
