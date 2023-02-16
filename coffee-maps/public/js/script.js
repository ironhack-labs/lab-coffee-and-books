// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("coffee-maps JS imported successfully!");
});

const initCoords = { lat: 40.47209155133859, lng: - 3.5869493071615284 }
let myMap

axios
  .get('/api/locations')
  .then(({ data }) => setMarkers(data))
  .catch(err => console.log(err))


function initMap() {

  myMap = new google.maps.Map(
    document.querySelector('#map'),
    {
      zoom: 12,
      center: initCoords,
    }
  )
}


function setMarkers(place) {

  place.forEach(elm => {

    const lat = elm.location.coordinates[0]
    const lng = elm.location.coordinates[1]

    new google.maps.Marker({
      map: myMap,
      position: { lat, lng },
      title: elm.name
    })
  })
}