
function initMap() {
  printMap()
  getPlaces()
}


function getPlaces() {

  axios
    .get('/api/places')
    .then(response => setMarkers(response.data))
    .catch(err => console.log(err))
}


function setMarkers(places) {

  places.forEach(place => {

    const lat = place.location.coordinates[0]
    const lng = place.location.coordinates[1]

    new google.maps.Marker({
      myMap: map,
      position: { lat, lng },
      title: elm.name
    })
  })
}


function printMap() {

  new google.maps.Map(
    document.getElementById('mapa'),
    {
      zoom: 16,
      center: { lat: 40.4466299007422, lng: - 3.6746561949108187 }
    }
  )
}