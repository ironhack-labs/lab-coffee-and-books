let mapInstance;

const Place = require('../../models/place.model')

function initApp() {
  drawMap()
  getPlaces()
}

function drawMap() {
  mapInstance = new google.maps.Map(
    document.querySelector('#placesMap'), { center: { lat: 28.467422, lng: -16.250289 }, zoom: 17, styles: mapStyles.retro }
  )
}

function getPlaces() {
  Place
    .find()
    .then(allPlaces => drawMarkers(allPlaces.data))
    .catch(err => console.log(err))
}

function drawMarkers(placesArray) {
  placesArray.forEach(elm => {
    let position = { lat: elm.location.coordinates.lat, lng: elm.location.coordinates.lng }
    
    new google.maps.Marker({
      map: mapInstance,
      position,
      title: elm.name
    })
  })
  mapInstance.setCenter({ lat: placesArray[0].location.coordinates.lat, lng: placesArray[0].location.coordinates.lng })
}