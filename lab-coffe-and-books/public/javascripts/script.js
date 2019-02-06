// SET PROPERTIES FOR MAPBOXAPI QUERY
let endpoint = "mapbox.places";
let seachText = "coffee";
let proximity = [13.3710496, 52.506378];
const accessToken =
  "pk.eyJ1IjoibWZlbG15IiwiYSI6ImNqcnQ4Y3dzdDBpcXc0M244ZThuNGwwcm4ifQ.gfS3AdQOyN8Dpm103qfa5g";

const mapboxAPI = new APIHandler("https://api.mapbox.com/geocoding/v5");

// SET PROPERTIES FOR MAPBOX QUERY
mapboxgl.accessToken =
  "pk.eyJ1IjoibWZlbG15IiwiYSI6ImNqcnQ4Y3dzdDBpcXc0M244ZThuNGwwcm4ifQ.gfS3AdQOyN8Dpm103qfa5g";
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 13,
  center: proximity // SET DEFAULT CENTER
});

function addMarker(center, category) {
  let markerColor = "";
  switch (category) {
    case "coffee":
      markerColor = "red";
      break;
    case "bookstore":
      markerColor = "blue";
      break;

    default:
      markerColor = "light blue";
      break;
  }
  new mapboxgl.Marker({
    color: markerColor
  })
    .setLngLat([center[0], center[1]])
    .addTo(map);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    let lng = position.coords.longitude;
    let lat = position.coords.latitude;
    map.setCenter([lng, lat]);
    proximity = [lng, lat];
    addMarker([lng, lat]);
  });
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    // GET BOOKSTORES AND COFFEE PLACES FROM API TO VIEW
    document.getElementById("get-coffee").onclick = function() {
      let category = "coffee";
      mapboxAPI
        .getFullList(endpoint, category, proximity, accessToken)
        .then(coffees => {
          document.getElementById("get-coffee").remove();
          for (let i = 0; i < coffees.length; i++) {
            const { text, place_name, center } = coffees[i];
            addMarker(center, category);
            const newLi = `<li>${place_name}</li> <a href="/add?name=${text}&category=${category}&lng=${
              center[0]
            }&lat=${center[0]}">Add as favourite</a>`;
            document.getElementById("li-coffee").innerHTML += newLi;
          }
        })
        .catch(console.log);
    };
    document.getElementById("get-bookstores").onclick = function() {
      let category = "bookstore";
      mapboxAPI
        .getFullList(endpoint, category, proximity, accessToken)
        .then(bookstores => {
          document.getElementById("get-bookstores").remove();
          for (let i = 0; i < bookstores.length; i++) {
            const { text, place_name, center } = bookstores[i];
            addMarker(center, category);
            const newLi = `<li>${place_name}</li> <a href="/add?name=${text}&category=${category}&lng=${
              center[0]
            }&lat=${center[0]}">Add as favourite</a>`;
            document.getElementById("li-bookstores").innerHTML += newLi;
          }
        })
        .catch(console.log);
    };
  },
  false
);
