"use strict";

function main() {
  console.log("AIzaSyBSrI5NdKnqZpIZ70IuCl4xSHwBEbCXNWo");
  var ironhackBCN = {
    lat: 41.3977381,
    lng: 2.190471916
  };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: ironhackBCN
  });

}

window.addEventListener("load", main);

// lat: 0//41.3977381,
// lng: 0//2.190471916
