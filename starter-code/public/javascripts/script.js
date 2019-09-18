const markers = [];
var map;
var pin;

function startMap() {
  var latlng = new google.maps.LatLng(40.392274, -3.697376);
  map = new google.maps.Map(document.getElementById('map'), {
    center: latlng,
    zoom: 15
  });
}



  function places(place) {
    place.forEach(point => {
      const center = {
        lat: Number(point.lat),
        lng: Number(point.lng)
      };
      pin = new google.maps.Marker({
        position: center,
        map: map,
        title: point.name
      });
      markers.push(pin);
    });
  }

  function getPlace() {
    axios
      .get("/places/api")
      .then(res => {
        places(res.data);
      })
      .catch(err => console.log(err));
  }

  document.addEventListener(
    "DOMContentLoaded",
    () => {
      startMap();
      getPlace();
      places();
    },
    false
  );