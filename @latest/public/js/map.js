
let placesMap;

function init() {
  printMap()
  getPlaces()
}


function getPlaces() {

  axios
    .get('/api/places')
    .then((response) => setMarkers(response.data))
    .catch(err => console.log(err))
}


function setMarkers(places) {

  places.forEach(place => {
    console.log(place)
    const lat = place.location.coordinates[0]
    const lng = place.location.coordinates[1]

    new google.maps.Marker({
      map: placesMap,
      position: { lat, lng },
      title: place.name
    })
  })
}


function printMap() {

  placesMap = new google.maps.Map(document.getElementById('mapa'),
    {
      zoom: 10,
      center: { lat: 40.309004, lng: -3.728764 }
    }
  )
}