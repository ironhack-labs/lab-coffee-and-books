document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

function startMap() {

  const ironhackBCN = {
    lat: 41.386230,
    lng: 2.174980
  };

  let markers = [];

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackBCN
  });

  let center = {
    lat: undefined,
    lng: undefined
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const user_location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(user_location);
      getPlace();
    }, () => {
      getPlace();
      console.log('error in locating all things');
    });
  } else {
    console.log('Browser don\'t mess with no geolocation');
  }







  function placePlaces(places) {
    places.forEach(function (place) {
      const center = {
        lat: place.location.coordinates[0],
        lng: place.location.coordinates[1]
      };
      const pin = new google.maps.Marker({
        position: center,
        map: map,
        title: place.name
      });
      markers.push(pin);
    });
  }


  function getPlace() {
    axios.get("http://localhost:3000/api")
      .then(response => {
        console.log(response.data.places)
        placePlaces(response.data.places);
      })
      .catch(error => {
        next(error);
      });
  }
}

startMap();