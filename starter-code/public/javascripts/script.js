// document.addEventListener('DOMContentLoaded', () => {

//   console.log('IronGenerator JS imported successfully!');

// }, false);

const ironhack = {
  lat: -23.5630056,
  lng: -46.6601539
}

const initMap = () => {
  const map = new google.maps.Map(document.getElementById('map'), 
  {
    zoom: 12,
    center: ironhack
  });

  axios.get('http://localhost:3000/api/index')
    .then(response => {
      const places = response.data;
      places.forEach(place => {
        if(place.location) {
          const [longitude, latitude] = place.location.coordinates;
          const latlong = {
            lat: latitude,
            lng: longitude
          }

          new google.maps.Marker({
            position: latlong,
            map: map,
            title: place.name
        })
        }
      })
    })
    .catch()


}

initMap();

