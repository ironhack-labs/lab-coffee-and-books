function initMap() {
    drawMap()
    getPlaces()
}

let map

function drawMap() {

    const { Map } = google.maps

    map = new Map(
        document.getElementById('myMap'),
        {
            zoom: 10,
            center: { lat: 40.392499, lng: -3.698214 },
            styles: mapStyles.aubergine
        }
    )
}

function getPlaces() {

    axios.get('/api/sitios')
        .then(response => printPlacesgetPlacesMarkers(response.data))
        .catch(err => console.log(err))
}

function printPlacesgetPlacesMarkers(x) {

    const { Marker } = google.maps

    x.forEach(elm => {

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