function initMap() {

  var coordinates = { lat: 0, lng: 0 };
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 4, center: coordinates });
  var marker = new google.maps.Marker({ position: coordinates, map: map });
}

initMap()