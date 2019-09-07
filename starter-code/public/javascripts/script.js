const markers = [];
var map;
var pin;

function startMap() {
  const home = {
    lat: 48.8415,
    lng: 2.3071199999999408
  };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: home
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
      console.log(res);
      places(res.data);
    })
    .catch(err => console.log(err));
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    startMap();
    getPlace();
  },
  false
);
