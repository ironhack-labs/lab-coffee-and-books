let map;
const markers = [];

function getPlaces() {
  axios.get('/api')
    .then((response) => {
      placeRestaurants(response.data.places);
    })
    .catch((error) => {
      console.log(error);
    });
}

function placeRestaurants(restaurants) {
  restaurants.forEach((restaurant) => {
    if (restaurant.location.coordinates.length) {
      console.log('->', restaurant.location.coordinates);
      const center = {
        lat: restaurant.location.coordinates[0],
        lng: restaurant.location.coordinates[1]
      };
      const pin = new google.maps.Marker({
        position: center,
        map: map,
        title: restaurant.name
      });
      markers.push(pin);
    }
  });
}

window.onload = () => {
  const center = {
    lat: -23.561530,
    lng: -46.660091
  };

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center
  });
};
