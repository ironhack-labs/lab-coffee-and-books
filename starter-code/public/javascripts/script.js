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
    center: { lat: 40.4381311, lng: -3.8196222 },
    zoom: 8
  });
}

initMap();

function showMarkers() {
  fetch("http://localhost:3000/map")
    .then(response => response.json())
    .then(places => {
      places.forEach(place => {
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
