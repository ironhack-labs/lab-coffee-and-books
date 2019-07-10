const markers = [];

let map = new google.maps.Map(
  document.getElementById('map'), {
    zoom: 5,
    center: {
      lat: -28,
      lng: -47,
    }
  }
);

const getPlaces = () => {
  if(document.URL.indexOf('details') !== -1) {
    axios.get(`/api/${document.URL.slice(document.URL.indexOf('details') + 8)}`)
    .then(res => placeMarkers([res.data.place]))
    .catch(err => console.log(err));
  } else {
    axios.get('/api')
    .then(res => placeMarkers(res.data.places))
    .catch(err => console.log(err));
  }
}

const placeMarkers = (places) => {

  places.forEach(place => {
    if(places.length === 1) {
      map = new google.maps.Map(
        document.getElementById('map'), {
          zoom: 15,
          center: {
            lat: place.location.coordinates[1],
            lng: place.location.coordinates[0]
          }
        });
    }
    const pin = new google.maps.Marker({
      position: {
        lat: place.location.coordinates[1],
        lng: place.location.coordinates[0]
      },
      map: map,
      title: place.name
    });
    markers.push(pin);
  });
}

getPlaces();
