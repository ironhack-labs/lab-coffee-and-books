let map

function initMap() {
  getPlacesDataFromAPI()
}

function getPlacesDataFromAPI() {
  
  axios.get('/api/')
    .then(response => drawMap(response.data))
    .catch(err => console.log('Hubo un error:', err))
}

function drawMap (places) {

  map = new google.maps.Map(document.querySelector('#map'),
    {

      center : { lat: 42.23280, lng: -8.72266},
      zoom: 15,
      styles: mapStyles.retro
    })


    
    
    places.forEach( elm => {
      
      let center = {
        lat: elm.location.coordinates[1],
        lng: elm.location.coordinates[0]
      }
      
      // new google.maps.Marker({ map, position: center})
      const icon = { url: 'https://i.dlpng.com/static/png/1799488-flying-cat-png-image-40367-cat-png-yellow-cat-png-500_375_preview.webp', scaledSize: new google.maps.Size(60, 56) }
    
      new google.maps.Marker({
        map,
        position: center,
        icon            // only URL
      })
  })

  map.setCenter({ lat: restaurants[0].location.coordinates[1], lng: restaurants[0].location.coordinates[0] })
}
