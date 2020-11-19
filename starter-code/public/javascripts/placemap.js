
let mapInstance

function initMap() {

  drawMap()
  getPlacesFromAPI()

}




function drawMap() {

  mapInstance = new google.maps.Map(document.querySelector('#coffeeMap'),
    {
      center: { lat: 40.409344, lng: - 3.709200 },
      zoom: 15
    }
  )
}



function getPlacesFromAPI() {
  axios
    .get('/api/places')
    .then(response => drawPlaces(response.data))
    .catch(err => console.log(err))
}

function drawPlaces(places) {

  places.forEach(elm => {

    let position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    console.log(position)
    
    new google.maps.Marker({
      map: mapInstance,
      position,
      title: elm.name
  })
  })
}

initMap();
