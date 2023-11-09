const ironhackCoords = { lat: 40.392521370648154, lng: -3.6989879718518366 }
let myMap

document.addEventListener("DOMContentLoaded", () => {
  console.log("Coffee-n-Books JS imported successfully!");
});

function init() {
  renderMap()
  getPlaces()
}

function renderMap() {

  myMap = new google.maps.Map(
    document.querySelector("#myMap"),
    {
      zoom: 15,
      center: ironhackCoords
    }
  )
  // getPlaces()

}


function getPlaces() {

  axios
    .get('/api/places')
    .then(res => printPlaces(res.data))
    .catch(err => console.log(err))

}

function printPlaces(places) {
  //console.log(places)
  places.forEach(element => {

    const location = { lat: element.location.coordinates[1], lng: element.location.coordinates[0] }

    new google.maps.Marker({
      map: myMap,
      position: location,
      title: element.name
    })
  });
}