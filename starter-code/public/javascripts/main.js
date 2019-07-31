window.onload = () => {

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: { lat: 41.386230, lng: 2.174980 }
  })

  getPlaces(map)
}


function getRestaurants(map) {

  axios.get('/places/api')
    .then(allPlaces => placePlaces(allPlaces.data, map))
    .catch(err => console.log(err))
}


function placeRestaurants(allPlaces, theMap) {

  allPlaces.forEach(elm => {

    const locatedAt = {
      lat: elm.location.coordinates[1],
      lng: elm.location.coordinates[0]
    }

    new google.maps.Marker({
      position: locatedAt,
      map: theMap,
      title: elm.name
    })

  })
}


//METODOS MAPA GOOGLE -----------ECHAR UN OJO