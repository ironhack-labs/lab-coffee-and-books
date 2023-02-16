// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("coffeeAndBooks JS imported successfully!");
});

const initCoordinates = { lat: 40.39285070746706, lng: -3.6988090074931823 }
let myMap

axios
  .get('/api/location')
  .then(({ data }) => setMarkers(data))
  .catch(err => next(err))

function initMap() {
  myMap = new google.maps.Map(
    document.querySelector('#map'),
    {
      zoom: 12,
      center: initCoordinates
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