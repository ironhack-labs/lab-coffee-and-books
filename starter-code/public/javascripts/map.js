var map;

var initMap = function initMap() {
  sitios.forEach(p => {
    console.log(p.lat, p.lng);
    createWindow(p.lat, p.lng, p.name);
  });
}

function createWindow(lat, lng, name) {
  position = {lat, lng};
  map = new google.maps.Map(document.getElementById('map'), {
    center: position,
    zoom: 15,
  });
  var infowindow = new google.maps.InfoWindow({
    content: name,
  });
  var marker = new google.maps.Marker({
    position: position,
    map: map,
    title: name,
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
