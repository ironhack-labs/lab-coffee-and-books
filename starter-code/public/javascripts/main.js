let myMap

window.onload = () => {

  const ironhackBCN = {
    lat: 41.386230,
    lng: 2.174980
  };


  myMap = new google.maps.Map(document.getElementById('myMap'), {
    zoom: 16,
    center: ironhackBCN
  });

  getplaces()

}



function getplaces() {
  axios.get("/places/api")
    .then(response => {
      console.log("LA RESPUESTA DEL SERVIDOR ES", response)
      placeplaces(response.data.places)
    })
    .catch(error => console.log(error))
}


function placeplaces(places) {
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