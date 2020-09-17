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
      center: { lat: 38.996555, lng: -1.848478 },
      zoom: 10,
      styles: mapStyles.retro
    }
  )

  places.forEach(elm => {

    let center = {
      lat: elm.location.coordinates[1],
      lng: elm.location.coordinates[0]
    }

let img = "/images/maps-and-flags.png"

    new google.maps.Marker({ map, position: center,icon: img })
    
  })

  map.setCenter({ lat: places[0].location.coordinates[1], lng: places[0].location.coordinates[0] })
}