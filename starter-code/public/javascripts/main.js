let myMap

window.onload = () => {

  const ironhackBCN = {
    lat: 41.386230,
    lng: 2.174980
  }

  const markers = []


  myMap = new google.maps.Map(document.getElementById('myMap'), {
    zoom: 13,
    center: ironhackBCN
  })

  getPlaces()

}



function getPlaces() {
  axios.get("/api")
    .then(response => {
      console.log("LA RESPUESTA DEL SERVIDOR ES", response)
      placePlaces(response.data.place)
    })
    .catch(error => console.log(error))
}



function placePlaces(places) {
  console.log(typeof (places))
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

  myMap.setCenter({
    lat: places[0].location.coordinates[1],
    lng: places[0].location.coordinates[0]
  })
}