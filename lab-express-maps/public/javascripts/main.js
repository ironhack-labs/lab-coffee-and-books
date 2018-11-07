// function startMap() {
//   const ironhackBCN = {
//     lat: 41.3977381,
//     lng: 2.190471916
//   };
//   const map = new google.maps.Map(
//     document.getElementById('map'),
//     {
//       zoom: 5,
//       center: ironhackBCN
//     }
//   );
// }

// startMap();

const center = {
  lat: 51.2695468,
  lng: 6.2910055
};


const markers = []

console.log("TEST");


const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 11,
  center: center
});

getRestaurants()

function getRestaurants() {
  axios.get("http://localhost:3000/places/api")
    .then(response => {
      placeRestaurants(response.data.restaurants);
    })
    .catch(error => {
      console.log(error);
    })
}

function placeRestaurants(restaurants) {
  restaurants.forEach(function (restaurant) {
    const center = {
      lat: restaurant.location.coordinates[1],
      lng: restaurant.location.coordinates[0]
    };
    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: restaurant.name
    });
    markers.push(pin);
  });
}