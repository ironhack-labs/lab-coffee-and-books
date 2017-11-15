"use strict";

//////////////
// CODE FROM CLASS EXERCISE (removed geolocation & icon mod)
//////////////


function main() {

  var center = {
    lat: 0,
    lng: 0
  };

  var domElement = document.getElementById('map');
  var options = {
    zoom: 2,
    center: center
  };

  var map = new google.maps.Map(domElement, options);

  // THE CORRECT WAY
  axios.get('/places/json')
    .then((response) => {
      const myPlaces = response.data;
      let markers = [];
      myPlaces.forEach(function(place) {
        let title = place.name;
        let position = {
          lat: place.location.coordinates[1],
          lng: place.location.coordinates[0],
        };
        var pin = new google.maps.Marker({
          position,
          map,
          title
        });
        markers.push(pin);
      });
    });

}

// CREATE MAP ON LOAD
window.addEventListener("load", main);

//const submit = document.getElementById('submit').addEventListener('click', () => {})
