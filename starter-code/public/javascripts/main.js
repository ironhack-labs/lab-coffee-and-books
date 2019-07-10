window.onload = () => {
  const ironhackBCN = {
    lat: 41.386230,
    lng: 2.174980,
  };

  const markers = [];

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackBCN,
  });

  const center = {
    lat: undefined,
    lng: undefined,
  };
};

function getPlaces() {
  axios.get('/restaurants/api')
    .then((response) => {
      placeRestaurants(response.data.restaurants);
    })
    .catch((error) => {
      console.log(error);
    });
}
