

let map

function initMap() {
  getPlacesDataFromAPI()
}

function getPlacesDataFromAPI() {

  axios.get('/api')
    .then(response => {
      console.log((response.data[0].location.coordinates))
      drawMap(response.data)
    }
    )
    
    .catch(err => console.log('Hubo un error:', err))
}


function drawMap(places) {

  map = new google.maps.Map(document.querySelector('#map'),
    {
      center: { lat: 0, lng: 0 },
      zoom: 17
    }
  )

  places.forEach(elm => {

    let center = {
      lat: elm.location.coordinates[1],
      lng: elm.location.coordinates[0]
    }

    new google.maps.Marker({ map, position: center })
  })
  console.log((places[0].location.coordinates))
  map.setCenter({ lat: places[0].location.coordinates[1], lng: places[0].location.coordinates[0] })
}