let mapInstance

function initMap() {

  newMap()
  getPlacesAddress()

}

function newMap() {
  mapInstance = new google.maps.Map(
    document.querySelector('#myPlacesMap'),
    {center: { lat: 40.392499, lng: -3.698214 }, zoom: 15}
  )
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

  mapInstance.setCenter({ lat: places[1].location.coordinates[0], lng: places[1].location.coordinates[1] })
}
