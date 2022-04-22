
let map

function initMap() {
    renderMap()
    getRestaurants()
}

function renderMap() {

    const { Map, Marker } = google.maps

    map = new Map(
        document.querySelector('#restuarantsMap'),
        {
            center: { lat: 40.392499, lng: -3.698214 },
            zoom: 10,
        }
    )
}

function getRestaurants() {

    axios.get('/api/places')
        .then(({ data }) => placeMarkers(data))
        .catch(err => consoel.log(err))
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