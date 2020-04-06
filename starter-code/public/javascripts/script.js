
document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

const getPlaces = () => {
  fetch('http://localhost:3000/getPlaces')
  .then(response => {
    response.json()
    .then( res => {
      console.log(res);
      placeStore(res)
    })
    .catch( err => console.log(err))
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
      place.forEach((place) => {
        console.log('new mapa', place);
        const center = {
          lat: place.latitude,
          lng: place.longitude
        };
        new google.maps.Marker({
          position: center,
          map: map,
          title: place.name,
        });
      });
}

getPlaces();