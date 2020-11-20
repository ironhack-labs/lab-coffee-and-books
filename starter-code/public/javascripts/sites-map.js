
let mapInstance


function initApp() {
    drawMap()
    getSites()
}


function drawMap() {
    mapInstance = new google.maps.Map(
        document.querySelector('#map'),
        { center: { lat: 37.408752, lng: -1.585035 }, zoom: 15 }
    )
}


function getSites() {
    axios
        .get('/api/sitios')
        .then(response => drawMarkers(response.data))
        .catch(err => console.log(err))
}


function drawMarkers(sitios) {
  let myUrl = window.location.href
  let id = myUrl.substring(myUrl.lastIndexOf('/') + 1)

    sitios.forEach(elm => {
      console.log(elm._id)
      console.log('y mi id es ', id)
      if (elm._id === id) {
        let position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }

        new google.maps.Marker({
            map: mapInstance,
            position,
            title: elm.name
        })
                  mapInstance.setCenter({ lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] })
      }
      })
  

    // mapInstance.setCenter({ lat: sitios[1].location.coordinates[0], lng: sitios[1].location.coordinates[1] })
}
