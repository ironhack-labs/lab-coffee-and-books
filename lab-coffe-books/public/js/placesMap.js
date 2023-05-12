let myMap

function initViewMarkers() {
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
  fetch('/api-places')
    .then(res => res.json())
    .then(placesJSON => renderPlacesMarkers(placesJSON))
    .catch(err => console.log(err))
}


function renderPlacesMarkers(placesJSON) {

  placesJSON.forEach(elm => {

    const placesCoors = { lat: elm.location.coordinates[1], lng: elm.location.coordinates[0] }

    new google.maps.Marker({
      map: myMap,
      position: placesCoors,
      title: elm.name
    })

  })
}

