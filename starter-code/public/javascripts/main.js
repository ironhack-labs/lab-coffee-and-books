
function getAllPlacesFromTheAPI(myMap) {
  axios.get("/places/api")
    .then(place => placePlaces(place.data.places, myMap))
    .catch(error => console.log(error))
}

function placePlaces(places, myMap) {

  places.forEach(elm => {

    console.log(elm.location.coordinates[1])

    const center = { lat: elm.location.coordinates[1], lng: elm.location.coordinates[0] }

    new google.maps.Marker({
      position: center,
      map: myMap,
      title: elm.name
    });

  })
}


function initMap() {

  const myMap = new google.maps.Map(document.getElementById('map'),
    {
      zoom: 14,
      center: {
        lat: 40.416681, 
        lng: -3.703751
      }
    }
  )

  getAllPlacesFromTheAPI(myMap)
}
