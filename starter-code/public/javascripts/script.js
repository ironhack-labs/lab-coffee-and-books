let myMap

window.onload = () => {
  console.log("ENTRAS ASQUÍ ?")

  const directionPrueba = {
    location: {
      coordinates: {
        lat: 40.397693,
        lng: -3.701079
      },
      title: 'Prueba google'
    },
  }

  myMap = new google.maps.Map(document.querySelector('#map'), { center: directionPrueba.location.coordinates, zoom: 15, styles: mapStyles.aubergine })

  //Call Autocomplete.getPlace() on the Autocomplete object, to retrieve a PlaceResult object, which you can then use to get more information about the selected place.

  getPlaces()

}

function getPlaces() {
  console.log("axiopatronum")
  axios.get("/place/api")
    .then(response => {
      console.log("LA RESPUESTA DEL SERVIDOR ES", response)
      placeMaps(response.data.places)
    })
    .catch(error => console.log(error))
}

function placeMaps(places) {
  console.log(places)
  console.log(places[0].location.coordinates)
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
    console.log(center)
  })

  myMap.setCenter({
    lat: places[0].location.coordinates[1],
    lng: places[0].location.coordinates[0]
  })
}

