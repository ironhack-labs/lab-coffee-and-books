let map

function initMap() {
    
  getPlacesDataFromAPI()
}

function getPlacesDataFromAPI() {

  axios.get('/api/places')
    .then(response => drawMap(response.data))
    .catch(err => console.log('Hubo un error:', err))
}


function drawMap(places) {

  map = new google.maps.Map(document.querySelector('#placesMaps'),
    {
      center: { lat: 0, lng: 0 },
      zoom: 10
    }
  )

  places.forEach(elm => {

    let center = {
      lat: elm.location.coordinates[1],
      lng: elm.location.coordinates[0]
    }

    new google.maps.Marker({ map, position: center })
  })

  map.setCenter({ lat: places[0].location.coordinates[1], lng: places[0].location.coordinates[0] })
}