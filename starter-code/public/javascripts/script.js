let myMap = undefined

window.onload = () => {

  const placeCenter = {
    lat: 40.391074,
    lng: -3.701793
  };
  let mapOptions = {
    zoom: 15,
    center: placeCenter
  }
  myMap = new google.maps.Map(document.getElementById("myMap"), mapOptions)

  getPlaces()
}

function getPlaces() {
  axios.get("/api")
    .then(placesApi => {
      const place = placesApi.data
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