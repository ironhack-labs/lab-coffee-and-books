let mapInstance, userCurrentPosition

function initMap() {

  newMap()
  getPlacesAddress()

}

function newMap() {

  mapInstance = new google.maps.Map(
    document.querySelector('#myPlacesMap'),
    {center:  { lat: 40.392499, lng: -3.698214 }, zoom: 15, styles: nightParty}
  )

  if (navigator.geolocation) {
   
    navigator.geolocation.getCurrentPosition(

      pos => {
        userCurrentPosition = { lat: pos.coords.latitude, lng: pos.coords.longitude }
        mapInstance.setCenter(userCurrentPosition)
      },
      
      err => console.log('¡No me has dejado acceder a tu posición!', err))
    
  } else {

    console.log('Módulo de geolocalización no disponible')

  }
}

function getPlacesAddress() {

  axios
      .get('/api/places')
      .then(response => drawMarkers(response.data))
      .catch(err => console.log(err))
}


function drawMarkers(places) {

  places.forEach(elm => {

      let position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }

      new google.maps.Marker({
          map: mapInstance,
          position,
          title: elm.name
      })
  })

  //mapInstance.setCenter({ lat: places[0].location.coordinates[0], lng: places[0].location.coordinates[1] })
}
