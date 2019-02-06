document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.4167, lng: -3.70325 },
    zoom: 15
  });
}

initMap();

function showMarkers() {
  axios.get(`http://localhost:3000/map`).then(places => {
    places.data.forEach(place => {
      new google.maps.Marker({
        map: map,
        position: {
          lat: place.location.coords.lat,
          lng: place.location.coords.lng
        },
        title: place.name
      });
    });
  });
}

showMarkers();
