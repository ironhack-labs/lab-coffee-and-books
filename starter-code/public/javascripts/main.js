window.onload = () => {
  
  function getPlaces(map) {
    console.log("entra getplaces")
    axios.get("/books/api")
        .then(response => {
          
          console.log("axios actua",response.data)
          placeMarkers(response.data.places, map)})
        .catch(error => console.log(error))
  
  }
  
  
  const placeMarkers = (places, myMap) => {
  
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

  const ironhackBCN = {
    lat: 41.3977381,
    lng: 2.190471916};

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {
        lat: 41.386230,
        lng: 2.174980
    }
  })
  console.log("antes de getplaces")
  getPlaces(map)

}
