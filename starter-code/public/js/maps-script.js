let map

function initMap() {
    drawMap()
    getPlaces()
}

function drawMap() {
    const { Map } = google.maps

    map = new Map(
        document.querySelector('#myMap'),
        {
            zoom: 15,
            center: { lat: 40.392499, lng: -3.698214 }
        }
    )
}

function getPlaces() {
    axios
        .get('/api/places')
        .then(response => drawPlaces(response.data))
        .catch(err => console.log(err))

}

function drawPlaces(places) {

    console.log(google.maps)

    const { Marker } = google.maps

    places.forEach(elm => {
        new Marker({
            map,
            position: {
                lat: elm.location.coordinates[0],
                lng: elm.location.coordinates[1]
            },
            title: elm.name
        })
    })
}