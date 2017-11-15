'use strict';

$('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const locationInfo = {
    lat: document.getElementById('lat').value,
    lng: document.getElementById('lng').value,
    currentLocation: true
  };


});
