var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.416931, lng: -3.703515},
    zoom: 18
  });
}

function setMarker(lat, lng, map, title) {
  new google.maps.Marker({
      position: {
          lat: lat,
          lng: lng
      },
      map: map,
      title: title
  });
}

class Place{
  constructor(name, type, lng, lat){
    this.name = name;
    this.type = type;
    this.lng = lng;
    this.lat = lat;
  }
}

function init(){
  axios.get('./places/list')
    .then(places => {
      places.data.forEach(place => {
        new google.maps.Marker({
          position: {
            lat: place.coordinates[1],
            lng: place.coordinates[0]
          },
          map,
          title: place.name
        });
      });
    });
}

window.onload = init;