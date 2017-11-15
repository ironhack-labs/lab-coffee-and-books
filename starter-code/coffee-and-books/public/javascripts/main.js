"use strict";
// var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
// var labelIndex = 0;

function main() {
  const ironhackBCN = {
    lat: 41.3977381,
    lng: 2.190471916
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: ironhackBCN
  });
  // This event listener calls addMarker() when the map is clicked.
  // google.maps.event.addListener(map, "click", function(event) {
  //   addMarker(event.latLng, map);
  // });
  // // Add a marker at the center of the map.
  // addMarker(ironhackBCN, map);

  // // Adds a marker to the map.
  // function addMarker(location, map) {
  //   // Add the marker at the clicked location, and add the next-available label
  //   // from the array of alphabetical characters.
  //   var marker = new google.maps.Marker({
  //     position: location,
  //     label: labels[labelIndex++ % labels.length],
  //     map: map
  //   });
  // }
}

window.addEventListener("load", main);
