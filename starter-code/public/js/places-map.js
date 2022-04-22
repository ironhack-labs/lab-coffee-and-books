let map

function initMap() {
    renderMap()
    getPlaces()
}

function renderMap() {

    const { Map, Marker } = google.maps

    map = new Map(
        document.querySelector('#map'),
        {
            center: { lat: 40.392499, lng: -3.698214 },
            zoom: 10,
        }
    )
}

function getPlaces() {

    axios.get('/api/json')
        .then(({ data }) => placeMarkers(data))
        .catch(err => consoel.log(err))
}

function placeMarkers(places) {

    const { Marker } = google.maps

    places.forEach(place => {

        const position = {
            lat: place.location.coordinates[1],
            lng: place.location.coordinates[0],
        }

        new Marker({ position, title: place.name, map })
    })
}