let myMap

function initMap() {
  const mapOptions = {
    center: { lat: 40.393186, lng: -3.698575 },
    zoom: 5
  }
  myMap = new google.maps.Map(document.querySelector('#myMap'), mapOptions)
  getPlaces()
}

function getPlaces() {

  axios.get('/api')
    .then(response => {
      const places = response.data
      placeInMap(places)
    })
    .catch(err => console.log("error: ", err))
}

function placeInMap(places) {
  places.forEach(elm => {
    let pos = { lat: elm.location.coord[1], lng: elm.location.coord[0] }
    new google.maps.Marker({ position: pos, map: myMap, title: elm.name })
  })
}