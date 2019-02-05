let map;
const markers = [];

function placePlaces(places) {
  places.forEach((place) => {
    if (Place.location.coordinates.length) {
      console.log('->', Place.location.coordinates);
      const center = {
        lat: Place.location.coordinates[1],
        lng: Place.location.coordinates[0]
      };
      const pin = new google.maps.Marker({
        position: center,
        map,
        title: Place.name
      });
      markers.push(pin);
    }
  });
}

function getPlaces() {
  axios.get('/places/api')
    .then( (response) => {
      placePlaces(response.data.places);
    })
    .catch((error) => {
      console.log(error);
    });
}


window.onload = () => {
  const ironhackBCN = {
    lat: -23.5636365, 
    lng: -46.6550924
  };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackBCN
  });

  const center = {
    lat: undefined,
    lng: undefined
  };
};
