let generalMap

window.onload = () => {

  const centerMadridCoordinates = {
    lat: 40.417056,
    lng: -3.703290
  }

  generalMap = new google.maps.Map(document.getElementById('general-map'), {
    zoom: 15,
    center: centerMadridCoordinates
  })

  getAllPlaces()
}

function getAllPlaces() {
  axios.get("/list-places")
    .then(responseFromDB => putMarkers(responseFromDB.data.places))
    .catch(error => console.log(error))
}



function putMarkers(places) {

  places.forEach(elm => {
    const placeCoord = {
      lat: elm.location.coordinates[0],
      lng: elm.location.coordinates[1]
    }

    new google.maps.Marker({
      position: placeCoord,
      map: generalMap,
      title: elm.name
    })
  })
}