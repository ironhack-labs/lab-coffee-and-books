
document.addEventListener('DOMContentLoaded', () => {

}, false);
// var modifiedStr = locationsArray

// fetch("http://localhost:3000/api")
//   .then(res => res.json())
//   .then(json => console.log(json.places));




const locationsArray = [{ lat: 41.3977381, lng: 2.390471916 }]
function initMap(locationsArray) {

  const myMap = new google.maps.Map(                // 2 argumentos: selector, opciones
    document.getElementById('map'),
    {
      center: locationsArray[0],
      zoom: 10
    }
  )

  // getRestaurants(myMap)

  const createMarker = (coord) => {
    new google.maps.Marker({
      map: myMap,
      position: coord,
      title: 'Aquí estámn los ironhackers del mar'
    })
  }

  locationsArray.forEach(element => {
    createMarker(element)
  });

  // /////////////////////////////////////

  // function getRestaurants(map) {
  //   axios.get("/api")
  //     .then(response => {
  //       console.log(response)
  //       placePlaces(response.data.places, map)
  //     })
  //     .catch(error => console.log(error))
  // }

  // const locationsArray = (places, myMap) => {

  //   places.forEach(places => {
  //     console.log(places)
  //     const location = {
  //       lat: places.location.lat,
  //       lng: places.location.lng
  //     }

  //     new google.maps.Marker({
  //       position: location,
  //       map: myMap,
  //       title: places.name
  //     })
  //   })
  // }


}

initMap(locationsArray);