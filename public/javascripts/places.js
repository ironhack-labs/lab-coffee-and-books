let mapInstance

function initApp() {
    drawMap()
    getRestaurantsFromAPI()
}


function drawMap() {
    mapInstance = new google.maps.Map(
        document.querySelector('#restaurantsMap'),
        { center: { lat: 40.416776, lng: -3.703507 }, zoom: 15, styles: mapStyles.yellow }
    )
}


function getRestaurantsFromAPI() {

    axios
        .get('/api/restaurants')
        .then(response => {
            console.log('consola:', response.data)
            drawMarkers(response.data)
        })
        .catch(err => console.log(err))
}


function drawMarkers(restaurants) {

    restaurants.forEach(elm => {

        let position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }

        new google.maps.Marker({
            map: mapInstance,
            position,
            title: elm.name
        })
    })

    mapInstance.setCenter({ lat: restaurants[1].location.coordinates[0], lng: restaurants[1].location.coordinates[1] })
}