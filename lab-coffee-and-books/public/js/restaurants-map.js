let myMap

function initMarkers() {
  initMap()
  getPlacesJSON()
}


function initMap() {
  myMap = new google.maps.Map(
    document.querySelector('#map'),
    { zoom: 12, center: { lat: 40.392521370648154, lng: - 3.6989879718518366 }, }
  )
}


function getPlacesJSON() {
  fetch('/places/maps')
    .then(res => res.json())
    .then(placesJSON =>{
        console.log(placesJSON)
        renderPlacesMarkers(placesJSON)})
    .catch(err => console.log(err))
}


function renderPlacesMarkers(placesJSON) {

  placesJSON.forEach(elm => {

    const placeCoords = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }

    new google.maps.Marker({
      map: myMap,
      position: placeCoords,
      title: elm.name
    })

  })
}
