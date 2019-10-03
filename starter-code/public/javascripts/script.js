document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

window.onload = () => {
  getPlaces();
};

function placeOnTheMap(place) {
  const markers = [];
  let center = {
    lat: 41.386230,
    lng: 2.174980
  };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: center
  });

  place.forEach(function (item) {
    const center = {
      lat: item.location.coordinates[1],
      lng: item.location.coordinates[0]
    };
    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: item.name
    });
    markers.push(pin);
  });
}

function getPlaces() {
  axios.get("/api")
    .then(response => {
      placeOnTheMap(response.data);
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    })
}