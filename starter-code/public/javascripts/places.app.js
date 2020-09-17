let map

function initMap() {
  getPlacesDataFromAPI()
}

function getPlacesDataFromAPI() {

  axios.get('/')
    .then(response => drawMap(response.data))
    .catch(err => console.log('Hubo un error:', err))
}


function drawMap(Places) {

  map = new google.maps.Map(document.querySelector('#Map'),
    {
      center: { lat: 0, lng: 0 },
      zoom: 17
    }
  )

  Places.forEach(elm => {

    let center = {
      lat: elm.location.coordinates[1],
      lng: elm.location.coordinates[0]
    }

    new google.maps.Marker({ map, position: center })
  })

  map.setCenter({ lat: Places[0].location.coordinates[1], lng: Places[0].location.coordinates[0] })
}