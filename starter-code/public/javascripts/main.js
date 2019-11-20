function getAllStoreFromTheAPI(myMap) {
  axios.get("/api")
    .then(response => {
      console.log(response)
      placePlaces(response.data, myMap)

    })
    .catch(error => console.log(error))
}

function placePlaces(Store, myMap) {
  console.log(Store)
  //lo de abajo se hizo asi porque Store es un objeto
  Store.store.forEach(elm => {

    const center = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }

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
      zoom: 5,
      center: {
        lat: 41.3977381,
        lng: 2.190471916
      }
    }
  )

  getAllStoreFromTheAPI(myMap)
}