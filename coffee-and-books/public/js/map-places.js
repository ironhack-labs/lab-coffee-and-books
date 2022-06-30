let map

function init() {
    renderMap()
    getPlacesFromDB()
}


function renderMap() {
    map = new google.maps.Map(
        document.querySelector('#myMap'),
        { zoom: 13, center: { lat: 40.39614955549018, lng: -3.6988164866287274 }, styles: mapStyles.aubergine }
    )
}


function getPlacesFromDB() {

    axios
        .get('/places')
        .then(response => printMarkers(response.data))
        .catch(err => console.log(err))
}

function printMarkers(places) {

    console.log(places)

    places.forEach(place => {

        let position = { lat: place.location.coordinates[0], lng: place.location.coordinates[1] }
        let title = place.name

        new google.maps.Marker({ position, map, title })
    })

    map.setCenter({ lat: places[0].location.coordinates[0], lng: places[0].location.coordinates[1] })
}