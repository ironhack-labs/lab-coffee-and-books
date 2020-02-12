let initialCoords = {
    lat: 40.4072702,
    lng: -3.6978279
  },
  myMap

function initMap() {
  let mapOptions = {
    center: initialCoords,
    zoom: 10
  }
  myMap = new google.maps.Map(document.querySelector('#placesMap'), mapOptions)
  getPlaces()
}


function getPlaces() {

  axios.get("/places/api")
    .then(response => {
      const allPlaces = response.data
      console.log('el array de places es:', allPlaces)
      placePlacesInMap(allPlaces)
    })
    .catch(error => console.log(error))
}


function placePlacesInMap(places) {

  places.forEach(place => {
    const center = {
      lat: place.location.coordinates[0],
      lng: place.location.coordinates[1]
    }
    new google.maps.Marker({
      position: center,
      map: myMap,
      title: place.name
    })
  })
}