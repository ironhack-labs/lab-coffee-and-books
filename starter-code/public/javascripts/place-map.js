
let map

function initMap() {
  getPlaceDataFromApi()
}

function getPlaceDataFromApi() {
  axios.get('/api/place')
    .then(response => drawMap(response.data))
    .catch(err => console.log('Hubo un error : ', err))
}

function drawMap(place) {
  map = new google.maps.Map(document.querySelector('#placeMap'), {
    center: { lat: 0, lng: 0 },
    zoom: 6
  })
  place.forEach(elm => {

    let center = {
      lat: elm.location.coordinates[1],
      lng: elm.location.coordinates[0]
    }
    new google.maps.Marker({map, position: center})
  })
  map.setCenter({lat:place[0].location.coordinates[1], lng: place[0].location.coordinates[0]})
}