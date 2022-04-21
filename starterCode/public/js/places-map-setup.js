let map

function initMap() {
    renderMap()
    getPlaces()
}

function renderMap() {

    const { Map, Marker } = google.maps

    map = new Map(
        document.querySelector('#placesMap'),
        {
            center: { lat: 40.392499, lng: -3.698214 },
            zoom: 7,
        }
    )
}

function getPlaces() {

    axios.get('/api/places')
        .then(({ data }) => placeMarkers(data))
        .catch(err => console.log(err))
}

function placeMarkers(places) {

    const { Marker } = google.maps

    places.forEach(places => {

        const position = {
            lat: places.location.coordinates[0],
            lng: places.location.coordinates[1],
        }

        new Marker({ position, title: places.name, map })
    })
}