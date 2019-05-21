window.onload = () => {

  const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: {
          lat: 40.4315319,
          lng: -3.674937399999976
      }
  })

  let center = {
      lat: undefined,
      lng: undefined
  }

  getPlaces(map)
}




function getPlaces(map) {
  axios.get("/place/api")
      .then(response => {
        console.log(response.data.places)
        placePlaces(response.data.places  , map)})
      .catch(error => console.log(error))
}


const placePlaces = (places, myMap) => {

  places.forEach(place=> {

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