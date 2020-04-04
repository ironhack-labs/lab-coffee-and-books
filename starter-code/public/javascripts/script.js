// document.addEventListener('DOMContentLoaded', () => {

//   console.log('IronGenerator JS imported successfully!');

// }, false);



window.onload = () => {
  const center = {
    lat: -23.561463,
    lng: -46.656343
  }
  };


// const markers = {
//   ironhack: {
//       lat: -23.561636,
//       lng: -46.660131
//   },
//   mcdonalds: {
//       lat: -23.560292,
//       lng: -46.658235
//   },
//   masp: {
//       lat: -23.561463,
//       lng: -46.656343
//   }
// }

function startMap() {
  const mapOptions = { center: center, zoom: 5 }
    
  // myMap = new google.maps.Map(
  //   document.querySelector('#placesMap'), mapOptions)
  // getPlaces()

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: center,
  });


} //closes startMap function



function getPlaces() {

  axios.get("/place/api")
  .then(response => {
      const allPlaces = response.data
      console.log('places array:', allPlaces)
      placeRestaurantsInMap(allPlaces)
  })
  .catch(error => console.log(error))



} //closes getPlaces function


function placeRestaurantsInMap(places) {

  places.forEach(place => {
      const center = { lat: place.location.coordinates[1], lng: place.location.coordinates[0] }
      new google.maps.Marker({ position: center, map: myMap, title: place.name })
  })

} //closes placeRestaurantsInMap


