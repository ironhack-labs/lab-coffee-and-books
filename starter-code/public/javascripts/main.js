window.onload = () => {

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {
      lat: 41.386230,
      lng: 2.174980
    }
  })

  let center = {
    lat: undefined,
    lng: undefined
  }

  getPlaces(map)
}



function getPlaces(map) {
  axios.get("/places/api")
    .then(response => placePlaces(response.data.places, map))
    .catch(error => console.log(error))
}



const placePlaces = (places, myMap) => {

  places.forEach(place => {

    const location = {
      lat: place.location.coordinates[1],
      lng: place.location.coordinates[0]
    }

    new google.maps.Marker({
      position: location,
      map: myMap,
      title: place.name
    })
  })
}