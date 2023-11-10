// const Place = require("../../models/place");
// const ironhackCoords = { lat: 40.392521370648154, lng: - 3.6989879718518366 }
// let placeMap

// function init() {
//     renderMap()
//     getPlaceFromAPI()

// }
// function renderMap() {
//     placeMap = new google.maps.Map(
//         document.querySelector('#placesMap'),
//         {
//             zoom: 10,
//             center: ironhackCoords
//         }
//     )
// }
// function getPlacesFromAPI() {
//     axios
//         .get('/api/places')
//         .then(response => printPlacesMarkers(response.data))
//         .catch(err => console.log(err))
// }
// function printPlacesMarkers(places) {
//     places.forEach(e => {
//         const position = { lat: e.location.coordinates[1], lng: e.location.coordinates[0] }

//         new google.maps.Marker({
//             map: myMap,
//             position,
//             title: e.name
//         })
//     })
// }

