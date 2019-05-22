window.onload = () => {
  const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
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
  axios.get("/api")
      .then(response => setPlaces(response.data.places, map))
      .catch(error => console.log(error))
}


const setPlaces = (places, placesMap) => {

  places.forEach(place => {
      console.log(place)
      const location = {
          lat: place.location.coordinates[1],
          lng: place.location.coordinates[0]
      }
      console.log(location)
      new google.maps.Marker({
          position: location,
          map: placesMap,
          title: place.name
      })
  })
}