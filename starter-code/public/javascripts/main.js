"use strict";

//////////////
// CODE FROM CLASS EXERCISE (removed geolocation & icon mod)
//////////////


function main() {

  var ironhackBCN = {
    lat: 41.3977381,
    lng: 2.190471916
  };

  var domElement = document.getElementById('map');
  var options = {
    zoom: 15,
    center: ironhackBCN
  };

  var map = new google.maps.Map(domElement, options);

  var myMarker = new google.maps.Marker({
    position: {
      lat: 41.3977381,
      lng: 2.190471916
    },
    map: map,
    title: "Ironhack Campus!",
    animation: google.maps.Animation.DROP,
  });

  myMarker.setDraggable(true);

}



// CREATE MAP ON LOAD
window.addEventListener("load", main);

//const submit = document.getElementById('submit').addEventListener('click', () => {})
