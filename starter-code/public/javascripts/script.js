window.chosenLocation = null;
let inputLat = document.getElementById('lat');
let inputLong = document.getElementById('long');
let form = document.querySelectorAll('form');
var map;
var initalCoords;
let actualRute = 'http://localhost:3000/';
function initMap() {

  if (inputLat && inputLong) {
    initalCoords = { lat: Number(inputLat.value), lng: Number(inputLong.value) };
  } else {
    initalCoords = { lat: -25.344, lng: 131.036 };
  }



  map = new google.maps.Map(
    document.getElementById('map'), { zoom: 2, center: initalCoords });
  if (form.length > 0) {
    var marker = new google.maps.Marker({ position: initalCoords, map: map });
  }
  map.addListener("click", function (e) {
    window.chosenLocation = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    }
    marker.setPosition(chosenLocation);
    saveLocation(chosenLocation);
  })
}


function saveLocation(chosenLocation) {

  inputLat.value = chosenLocation.lat;
  inputLong.value = chosenLocation.lng;

}

function getPlacesJson() {
  console.log('entro');
  axios.get("/places/apiJson")
    .then(response => {
      markets(response.data.jsonPlaces);
    })
    .catch(error => {
      console.log(error);
    })
}

initMap();
getPlacesJson();

function markets(jsonData) {

  let coord = [];
  if (window.location.href == actualRute) {
    jsonData.forEach(element => {
      let coordsJson = {
        lat: element.coordinates.lat,
        lng: element.coordinates.long
      }
      const pin = new google.maps.Marker({
        position: coordsJson,
        map: map,
        title: element.name
      });
      coord.push(pin);


    });
  }
}