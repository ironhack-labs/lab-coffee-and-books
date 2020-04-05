let lat = document.querySelector('.lat').innerHTML;
let lng = document.querySelector('.lng').innerHTML;

lat = Number(lat);
lng = Number(lng);


var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: lat, lng: lng},
    zoom: 15
  });

  let placeMarker = new google.maps.Marker({
      position: {
          lat,
          lng
      }
  });

  placeMarker.setMap(map);
}