function startMap() {
  const ironhackBCN = {
    lat: 41.3977381,
    lng: 2.190471916,
  };

  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 10,
      center: ironhackBCN,
    },
  );

  axios.get('/places/getAll')
    .then((res) => {
      res.data.places.forEach(elem => elem.location && new google.maps.Marker({
        position: new google.maps.LatLng({
          lat: parseFloat(elem.location.lat),
          lng: parseFloat(elem.location.lng),
        }),
        map,
      }));
    })
    .catch(err => console.log(err));

  map.addListener('click', (e) => {
    window.chosenLocation = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    marker.setPosition(chosenLocation);
  });
}

startMap();
