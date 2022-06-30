let map

function init() {
    renderMap()
    getPlacesFromDB()
}

function renderMap() {
    map = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 15,
            center: {
                lat: 40.42042928766834, lng: - 3.7091093386208702
            }
        }
    )
}

function getPlacesFromDB() {

    axios
        .get('/api/places')
        .then(response => printMarkers(response.data))
        .catch(err => console.log(err))

}

function printMarkers(places) {
    console.log(places)

    places.forEach(place => {
        let position = { lat: place.location.coordinates[0], lng: place.location.coordinates[1] }
        console.log(position)

        new google.maps.Marker({ position, map, title: place.name })

    })
    map.setCenter({ lat: places[0].location.coordinates[0], lng: places[0].location.coordinates[1] })
}