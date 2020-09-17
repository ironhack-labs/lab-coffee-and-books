let map

function initMap() {
  getPlacesDataFromAPI()
}

function getPlacesDataFromAPI() {

  axios.get('/api')
    .then(response => drawMap(response.data))
    .catch(err => console.log('Hubo un error:', err))
}


function drawMap(places) {

  map = new google.maps.Map(document.querySelector('#Map'),
    {
      center: { lat: 40.6053084, lng: -4.1412611 },
      zoom: 10,
      styles: mapStyles.aubergine
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