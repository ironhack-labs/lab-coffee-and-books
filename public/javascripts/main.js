"use strict";

function main() {
  var ironhackBCN = {
    lat: 0,
    lng: 0
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: ironhackBCN
  });

  console.log("places", myPlaces);

  axios.get("/places/json").then((response) => {
    const myPlaces = response.data;

    myPlaces.coordinates
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
// }

window.addEventListener("load", main);
