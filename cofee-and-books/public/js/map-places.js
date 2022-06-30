let map

function init() {
    console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
    renderMap()
    getRestaurantsFromDB()
}


function renderMap() {
    console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')

    map = new google.maps.Map(
        document.querySelector('#myMap'),
        { zoom: 6, center: { lat: 0, lng: 0 } }
    )
}


function getRestaurantsFromDB() {

    axios
        .get('/places')
        .then(response => {
            printMarkers(response.data)
        })
        .catch(err => console.log(err))
}


function printMarkers(places) {

    console.log(places)

    places.forEach(restaurant => {

        let position = { lat: restaurant.location.coordinates[0], lng: restaurant.location.coordinates[1] }

        new google.maps.Marker({ position, map })
    })

    map.setCenter({ lat: places[0].location.coordinates[0], lng: places[0].location.coordinates[1] })
}