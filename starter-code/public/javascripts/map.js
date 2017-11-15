'use strict';

function map() {
  console.log("AIzaSyAvUL7rvwQhc3aXnVdRbXrEBTWGQhkeHII");
}

function startMap() {
  var ironhackBCN = {
    lat: 41.3977381,
    lng: 2.190471916
  };
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 15,
      center: ironhackBCN
    }
  );
  var myMarker = new google.maps.Marker({
    position: {
      lat: 41.3977381,
      lng: 2.190471916
    },
    map: map,
    title: "I'm here"
  });
}

window.addEventListener('load', startMap);
