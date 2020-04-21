let myMap

window.onload = () => {

  const coffeeAndKicks = {
    lat: 40.419244,
    lng: -3.706610
  }

  myMap = new google.maps.Map(document.getElementById('myMap'), {
    zoom: 15,
    center: coffeeAndKicks
  })
  let center = {
    lat: undefined,
    lng: undefined
  }
  getPlaces()
}

function getPlaces() {
  axios.get('places/api')
  .then(response => {
    console.log('La respuesta del servidor es', response)
    placePlaces(response.data.places)
  })
  .catch(error => console.log(error))
}

function placePlaces(places) {
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
    myMap.setCenter({
      lat: place[0].location.coordinates[1],
      lng: place[0].location.coordinates[0]
    })
  })
}