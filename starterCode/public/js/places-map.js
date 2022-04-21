let map

function initMap() {
    drawMap()
    getPlaces()
}

function drawMap() {
    const { Map } = google.maps

    map = new Map(
        document.getElementById('myMap'),
        {
            zoom: 15,
            center: { lat: 40.39158752397648, lng: - 3.6975056494255663 }
        }
    )
}

function getPlaces() {

    axios.get('/api/view')
        .then(response => printPlacesMarkers(response.data))
        .catch(err => console.log(err))
}

function printPlacesMarkers(places) {

    const { Marker } = google.maps

    places.forEach(elm => {

        const position = {

            lat: elm.location.coordinates[0],
            lng: elm.location.coordinates[1]
        }
        new Marker({ position, title: elm.name, map })

    })

}
