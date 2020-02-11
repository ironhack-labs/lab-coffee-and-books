window.onload = () => {
  const submit = document.getElementById('submit')
  if (submit !== null) {
    document.getElementById('submit').addEventListener('click', function () {
      geocodeAddress(geocoder, map);
    });
  }
}
let center = {
  lat: undefined,
  lng: undefined
};
const ironhackBCN = {
  lat: 41.386230,
  lng: 2.174980,
};

const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 13,
  center: ironhackBCN
});

const markers = []

function getPlaces() {
  axios.get("/api")
    .then(response => {
      placePlaces(response.data.places);
    })
    .catch(error => {
      console.log(error);
    })
}

function placePlaces(places) {
  places.forEach(function (place) {
    const center = {
      lat: place.location.coordinates[1],
      lng: place.location.coordinates[0]
    };
    console.log(center)
    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: place.name
    });
    console.log(pin)
    markers.push(pin);
    console.log(markers)
  });
}

const geocoder = new google.maps.Geocoder();

console.log(geocoder)

function geocodeAddress(geocoder, resultsMap) {
  let address = document.getElementById('address').value;

  geocoder.geocode({
    'address': address
  }, function (results, status) {

    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      let marker = new google.maps.Marker({
        setMap: resultsMap,
        position: results[0].geometry.location
      });
      console.log(marker)
      document.getElementById('latitude').value = results[0].geometry.location.lat();
      document.getElementById('longitude').value = results[0].geometry.location.lng();
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
getPlaces();