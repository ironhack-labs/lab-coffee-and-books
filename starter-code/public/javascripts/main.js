// let myMap

// window.onload = () => {

//     const ironhackBCN = {
//         lat: 41.386230,
//         lng: 2.174980
//     };


//     myMap = new google.maps.Map(document.getElementById('myMap'), {
//         zoom: 16,
//         center: ironhackBCN
//     });

//     getRestaurants()

// }



// function getRestaurants() {
//     axios.get("/restaurants/api")
//         .then(response => {
//             console.log("LA RESPUESTA DEL SERVIDOR ES", response)
//             placeRestaurants(response.data.restaurants)
//         })
//         .catch(error => console.log(error))
// }


// function placeRestaurants(restaurants) {
//     restaurants.forEach(restaurant => {
//         const center = {
//             lat: restaurant.location.coordinates[1],
//             lng: restaurant.location.coordinates[0]
//         }
//         new google.maps.Marker({
//             position: center,
//             map: myMap,
//             title: restaurant.name
//         })
//     })

//     myMap.setCenter({
//         lat: restaurants[0].location.coordinates[1],
//         lng: restaurants[0].location.coordinates[0]
//     })
// }
