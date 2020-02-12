window.onload = () => {
  const ironhackBCN = {
    lat: 41.386230,
    lng: 2.174980
  };

  const markers = []

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackBCN
  });

  let center = {
    lat: undefined,
    lng: undefined
  };
};

function getPlaces() {
  axios.get("/places/api")
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
    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: place.name
    });
    markers.push(pin);
  });
}

getPlaces();

const geocoder = new google.maps.Geocoder();

document.getElementById('submit').addEventListener('click', function () {
  geocodeAddress(geocoder, map);
});

function geocodeAddress(geocoder, resultsMap) {
  let address = document.getElementById('address').value;

  geocoder.geocode({
    'address': address
  }, function (results, status) {

    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      let marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
      document.getElementById('latitude').value = results[0].geometry.location.lat();
      document.getElementById('longitude').value = results[0].geometry.location.lng();
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}