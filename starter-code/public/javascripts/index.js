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

   place.description = $('#create-one-description').val();


   place.local = $('#create-one-local').val();


   place.latitude = $('#create-one-latitude').val();

   place.longitude = $('#create-one-longitude').val();

   placesAPI.CreateOne(map,place);

 });

  $('#show-one').on('click', (e) => {
    e.preventDefault();
    var place_name = $('#show-one-name').val();

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
