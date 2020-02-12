let initialCoords = {
    lat: 41.3977381,
    lng: 2.190471916
  },
  myMap

function initMap() {
  // Opciones de mapa
  let mapOptions = {
    center: initialCoords,
    zoom: 5
  }
  myMap = new google.maps.Map(document.querySelector('#myMap'), mapOptions)
  getRestaurants()
}

function getRestaurants() {
  axios.get("/places/api")
    .then(response => {
      const allRestaurants = response.data
      console.log('el array de restaurantes es:', allRestaurants)
      placeRestaurantsInMap(allRestaurants)
    })
    .catch(error => console.log(error))
}

function placeRestaurantsInMap(restaurants) {

  restaurants.forEach(restaurant => {
    const center = {
      lat: restaurant.location.coordinates[1],
      lng: restaurant.location.coordinates[0]
    }
    new google.maps.Marker({
      position: center,
      map: myMap,
      title: restaurant.name
    })
  })
}

function initMapUniqueLoc() {
  let id = placeID.value
  // Opciones de mapa
  let mapOptions = {
    center: initialCoords,
    zoom: 5
  }
  myMap = new google.maps.Map(document.querySelector('#myMap'), mapOptions)
  getRestaurant(id)
}

function getRestaurant(id) {
  axios.get(`/places/apiU/${id}`)
    .then(response => {
      const restaurant = response.data
      placeRestaurantInMap(restaurant)
    })
    .catch(error => console.log(error))
}

function placeRestaurantInMap(restaurant) {
  console.log(restaurant)
  const center = {
    lat: restaurant.location.coordinates[1],
    lng: restaurant.location.coordinates[0]
  }
  new google.maps.Marker({
    position: center,
    map: myMap,
    title: restaurant.name
  })
}