let detailMap

window.onload = id => {

  const centerMadridCoordinates = {
    lat: 40.417056,
    lng: -3.703290
  }

  const mapDOM = document.getElementById('detail-map')

  detailMap = new google.maps.Map(mapDOM, {
    zoom: 15,
    center: centerMadridCoordinates
  })

  getPlace(mapDOM.getAttribute('placeId'))
}

function getPlace(placeId) {
  axios.get(`/${placeId}/place`)
    .then(responseFromDB => putMarkers(responseFromDB.data.place))
    .catch(error => console.log(error))
}



function putMarkers(place) {

  const placeCoord = {
    lat: place.location.coordinates[0],
    lng: place.location.coordinates[1]
  }

  new google.maps.Marker({
    position: placeCoord,
    map: detailMap,
    title: place.name
  })

  detailMap.setCenter(placeCoord)
  detailMap.setZoom(17)

}