"use strict";

function main() {
  var center = {
    lat: 0,
    lng: 0
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: center
  });

  axios.get("/places/json").then(response => {
    const myPlaces = response.data;

    let markers = [];
    myPlaces.forEach(function(place) {
      let title = place.name;
      let position = {
        lat: place.location.coordinates[1],
        lng: place.location.coordinates[0]
      };
      var pin = new google.maps.Marker({ position, map, title });
      markers.push(pin);
    });

    // myPlaces.forEach(place => {
    //   console.log(place);
    // });
  });

  //   var myMarker = new google.maps.Marker({
  //     position: {
  //       lat: 0,
  //       lng: 0
  //     },
  //     map: map,
  //     title: "Nearest bathroom",
  //     animation: google.maps.Animation.DROP
  //   });

  //    myPlaces.array.forEach(element => {

  //    });
}

window.addEventListener("load", main);
