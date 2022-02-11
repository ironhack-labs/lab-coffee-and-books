function initMap() {

    drawMap()
    //getPlaces()
}


function drawMap() {
    const options = {
        center: { lat: 40.41266973724484, lng: - 3.7106261089045036 },
        zoom: 15
    }
    const mapInstance = new google.maps.Map(document.querySelector('#myMap'), options)
}





// function getPlaces() {

//     axios.get('/api/places')
//         .then(response => printPlacesMakers(response.data))
//         .catch(err => console.log(err))
// }

// function printPlacesMakers(places) {
//     const mapInstance = new google.maps.Map(document.querySelector('#myMap'))

//     // const markerOptions = {
//     //     position: { lat: 40.392499, lng: -3.698214 },
//     //     map: mapInstance,
//     //     title: 'text'
//     // }
//     //const markerInstance = new google.maps.Marker()
//     const location = {
//         coordinates: [lat, lng]
//     }

//     places.forEach(elm => {

//         new google.maps.Marker({
//             mapInstance,
//             position: {
//                 lat: elm.location.coordinates[0],
//                 lng: elm.location.coordinates[1]
//             },

//         })
//     })
// }
