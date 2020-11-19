let myMap = undefined

window.onload = () => {

  function getPlacesFromAPI() {
    axios.get("/api")
      .then(places => {
        const place = places.data
        place.forEach(elm => {
          const center = {
            lat: elm.location.coordinates[0],
            lng: elm.location.coordinates[1]
          }
          new google.maps.Marker({
            position: center,
            map: myMap,
            title: elm.name
          })
        })
      })
      .catch(error => console.log(error))
  }

  const firstPlace = { //son las de los Bajos de Argüelles
    lat: 40.43325,
    lng: -3.71526
  };
  let mapControls = {
    zoom: 17,
    center: firstPlace
  }
  myMap = new google.maps.Map(document.getElementById("myMap"), mapControls)

  getPlacesFromAPI()
}

