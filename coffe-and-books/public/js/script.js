const initialCoords = { lat: 40.39955534421206, lng: -3.6992854208151837 }
let myMap

function init() {
  renderMap()
  getRestaurantsData()
}

function renderMap() {

  myMap = new google.maps.Map(
    document.querySelector('#myMap'),
    { zoom: 15, center: initialCoords }
  )
}

function getRestaurantsData() {

  axios
    .get('/api/places')
    .then(response => printMarker(response.data))
    .catch(err => console.log(err))
}


function printMarker(place) {

  place.forEach(element => {

    const position = {
      lat: element.location.coordinates[1],
      lng: element.location.coordinates[0]
    }

    new google.maps.Marker({

      map: myMap,
      position: position,
      title: element
    })
  });



}
