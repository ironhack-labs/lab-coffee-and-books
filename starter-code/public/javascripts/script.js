document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('IronGenerator JS imported successfully!');
  },
  false
);

window.onload = () => {
  getPlace();
};

function getPlace() {
  axios
    .get('/api')
    .then(response => {
      placeCoffeeBook(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

function placeCoffeeBook(place) {
  const markers = [];

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {
      lat: -23.566857,
      lng: -46.6696338
    }
  });

  place.forEach(function(place) {
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

// const geocoder = new google.maps.Geocoder();

// document.getElementById('submit').addEventListener('click', function () {
//   geocodeAddress(geocoder, map);
// });

// function geocodeAddress(geocoder, resultsMap) {
//   let address = document.getElementById('address').value;

//   geocoder.geocode({ 'address': address }, function (results, status) {

//     if (status === 'OK') {
//       resultsMap.setCenter(results[0].geometry.location);
//       let marker = new google.maps.Marker({
//         map: resultsMap,
//         position: results[0].geometry.location
//       });
//       document.getElementById('latitude').value = results[0].geometry.location.lat();
//       document.getElementById('longitude').value = results[0].geometry.location.lng();
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// }
// });
