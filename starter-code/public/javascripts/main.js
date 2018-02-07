let map,lat, lng;
function startMap() {
  const ironhack = {
    lat: 40.392604,
    lng: -3.698388
  };
  // Centrado en Ironhack con un zoom 16
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: ironhack
  });
};