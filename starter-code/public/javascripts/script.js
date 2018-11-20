

function startMap() {
  const ironhackBCN = {
    lat: 41.3977381,
    lng: 2.190471916,
  };

  const map = new google.maps.Map(
    document.getElementById('theMap'), {
      zoom: 5,
      center: ironhackBCN,
    },
  );

  axios.get('/places/getPlaces')
    .then((res) => {
      res.data.places.forEach(function (elem) {
        const center = {
          lat: parseFloat(elem.location.lat),
          lng: parseFloat(elem.location.lng)
        };
        const pin = new google.maps.Marker({
          position: center,
          map: map,
          title: elem.name
        });
        markers.push(pin);
      });
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