const markers = [];
let map;

function getRestaurants() {
  axios.get('/places/api')
    .then((response) => {
      places(response.data.places);
    })
    .catch((error) => {
      console.log(error);
    });
}

function places(places) {
  console.log(places);
  places.forEach((place) => {
    const center = {
      lat: place.location.coordinates[1],
      lng: place.location.coordinates[0]
    };
    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: place.name
    });
    markers.push(pin);
  });
}

window.onload = () => {
  const mogi = {
    lat: -23.386230,
    lng: -46.174980
  };

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: mogi
  });

  getRestaurants();
};
