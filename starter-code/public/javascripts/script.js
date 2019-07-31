document.addEventListener('click', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

window.onload = () => {
  console.log("hola")
}

document.getElementById('detail').addEventListener('click',()=>{
  console.log("hola soy el boton de ver mapa")
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: { lat: 41.386230, lng: 2.174980 }
  })

  //getRestaurants(map)
})


// function getRestaurants(map) {

//   axios.get('/restaurants/api')
//     .then(allRestaurants => placeRestaurants(allRestaurants.data, map))
//     .catch(err => console.log(err))
// }


// function placeRestaurants(allRestaurants, theMap) {

//   allRestaurants.forEach(elm => {

//     const locatedAt = {
//       lat: elm.location.coordinates[1],
//       lng: elm.location.coordinates[0]
//     }

//     new google.maps.Marker({
//       position: locatedAt,
//       map: theMap,
//       title: elm.name
//     })

//   })
// }
// })