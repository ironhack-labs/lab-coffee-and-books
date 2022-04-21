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
            zoom: 10,
        }
    )
}

function getPlaces() {

    axios.get('/api/places')
        .then(({ data }) => placeMarkers(data))
        .catch(err => console.log(err))
}

function placeMarkers(restaurants) {

    const { Marker } = google.maps

    restaurants.forEach(restaurant => {

        const position = {
            lat: restaurant.location.coordinates[0],
            lng: restaurant.location.coordinates[1],
        }

        new Marker({ position, title: restaurant.name, map })
    })
}