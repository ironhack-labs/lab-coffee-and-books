let initialCoords = {
    lat: 40.420297,
    lng: -3.688536
  },
  myMap

function initMap() {
  let mapOptions = {
    center: initialCoords,
    zoom: 13
  }
  myMap = new google.maps.Map(document.querySelector('#placesMap'), mapOptions)
  getPlaces()
}


function getPlaces() {

  axios.get("/places/places/api")
    .then(response => {
      const allPlaces = response.data
      placesInMap(allPlaces)
    })
    .catch(error => console.log(error))
}


function placesInMap(places) {

  places.forEach(place => {
    const center = {
      lat: place.location.coordinates[1],
      lng: place.location.coordinates[0]
    }
    new google.maps.Marker({
      position: center,
      map: myMap,
      title: place.name
    })
  })
}