document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);


var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 10
  });

  axios.get('http://localhost:3000/places/api')
    .then( data => {
      let coord = data.data;

      console.log(coord);

      coord.map( place => {
        let position = {
          lat: place.coordinates.latitude,
          lng: place.coordinates.longitude
        }

        let marker = new google.maps.Marker({
          position: position,
        })

        map.setCenter({
          lat:-23.547395,
          lng: -46.640867
        })
  
        marker.setMap(map);

      })
    })
    .catch( error => console.log(error));
}