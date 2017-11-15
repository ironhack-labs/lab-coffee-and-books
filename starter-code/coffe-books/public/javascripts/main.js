// var placeMarkers = axios.get("/place/json")
// .then((response) => {
//     return response.data;
// });

function startMap() {
  var ironhackBCN = {
    lat:41.39780037511012,
    lng: 2.1905911449111493
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: ironhackBCN
  });
  var myMarker = new google.maps.Marker({
    position: {
      lat: 41.39780037511012,
      lng: 2.1905911449111493
    },
    map: map,
    title: "I'm here",
    animation: google.maps.Animation.DROP
  });
  myMarker.setDraggable(true);
  // Try to get a geolocation object from the web browser
}

let markers = [];
console.log(placeMarkers);
const array = JSON.stringify(placeMarkers);
array.forEach((place) => {
  let title = place.name
  let position = {
    lat: place.location.coordinates[1],
    lng: restaurant.location.coordinates[0]
  };
  var pin = new google.maps.Marker({ position, map, title  });
  markers.push(pin)
});

// startMap();
window.addEventListener("load", startMap());