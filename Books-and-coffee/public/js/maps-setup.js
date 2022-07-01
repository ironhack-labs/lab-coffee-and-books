let map

function init() {
    renderMap()
    getPlacesFromDB()
}


function renderMap() {
    map = new google.maps.Map(
        document.querySelector('#myMap'),
        { zoom: 15, center: { lat: 40.391, lng: -3.696 } }
    )
}


function getPlacesFromDB() {

    axios
        .get('/api')
        //.then(resp => console.log(resp))
        .then(response => printMarkers(response.data))
    // .catch(err => console.log(err))
}


function printMarkers(places) {

    places.forEach(place => {
        console.log(place)
        let position = { lat: place.location.coordinates[0], lng: place.location.coordinates[1] }

        new google.maps.Marker({ position, map })
    })

    // map.setCenter({ lat: places[0].location.coordinates[0], lng: places[0].location.coordinates[1] })
}