let map

function init() {
    renderMap()
    getRestaurantsFromDB()
}

function renderMap() {
    map = new google.maps.Map(
        document.querySelector('#myMap'),
        { zoom: 14, center: { lat: 40.41687548141053, lng: - 3.703338943661641 } }
    )
}

function getRestaurantsFromDB() {

    axios
        .get('/api/places')
        .then(response => printMarkers(response.data))
        .catch(err => console.log(err))
}

function printMarkers(places) {
    console.log(places)
    places.forEach(place => {
        let position = { lat: place.location.coordinates[0], lng: place.location.coordinates[1] }
        new google.maps.Marker({ position, map })
    })
    map.setCenter({ lat: places[0].location.coordinates[0], lng: places[0].location.coordinates[1] })
}