/*jshint esversion: 6*/
const placesAPI = new APIHandler("http://localhost:3000/api");

$(document).ready (()=>{

  var center = {
    lat: undefined,
    lng: undefined
  };

  var map;

  map = startMap(map);
 placesAPI.getCoordinates(map);

 $('#create-one').on('click', (e) => {
   e.preventDefault();
   var place = {};

   place.name = $('#create-one-name').val();
   console.log("place.name",place.name);

   place.description = $('#create-one-description').val();
   console.log("place.description",place.description);

   place.local = $('#create-one-local').val();
   console.log("place.local",place.local);

   place.latitude = $('#create-one-latitude').val();
   console.log("place.latitude",place.latitude);

   place.longitude = $('#create-one-longitude').val();
   console.log("place.longitude",place.longitude);

   placesAPI.CreateOne(map,place);

 });

  $('#show-one').on('click', (e) => {
    e.preventDefault();
    var place_name = $('#show-one-name').val();
    console.log("place_name",place_name);
    placesAPI.getOneCoordinates(map,place_name);
  });

  $('#show-all').on('click', (e) => {
    e.preventDefault();
    placesAPI.getCoordinates(map);
  });

  $('#delete-all').on('click', (e) => {
    e.preventDefault();
    placesAPI.deleteAll();
  });


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
