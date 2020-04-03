const axios = require('axios');
document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

const coffeeBooksApi = axios.create({
  baseURL: 'http://localhost:3000/api'
})


const getPlaces = () => {
  coffeeBooksApi
  .get()
  .then(response => {
    placeStore(response.data)
  })
  .catch(error => console.log(error))
}

const placeStore = (place) => {
  const SaoPaulo = {
        lat: -23.6345838, 
        lng: -46.7227298
      }
  const map = new google.maps.Map(document.getElementById('map'),{
          center: SaoPaulo,
          zoom: 8
      })
      places.forEach((place) => {
        const center = {
          lat: place.location.coordinates[1],
          lng: place.location.coordinates[0]
        };
        const pin = new google.maps.Marker({
          position: center,
          map: map,
          title: place.name,
        });
        markers.push(pin);
      });
}

getPlaces();