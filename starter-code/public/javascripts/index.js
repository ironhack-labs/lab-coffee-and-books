/*jshint esversion: 6*/
const placesAPI = new APIHandler("http://localhost:3000/api");

$(document).ready (()=>{

  var markers = [];

  var center = {
    lat: undefined,
    lng: undefined
  };

  var map;

  map = startMap(map);
  placesAPI.getCoordinates(map);


});

function startMap(map){

  var initialCenter = {
    lat: 41.3977381,
    lng: 2.090471916
  };

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: initialCenter
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const user_location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // Center map with user location
      map.setCenter(user_location);
    });
    return map;
  } else {
    console.log('Browser does not support geolocation.');
    return map;
  }
}
