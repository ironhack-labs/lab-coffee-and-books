let map

function initMap() {
    renderMap()
    getPlaces()
}

function renderMap() {

    const { Map } = google.maps

    map = new Map(
        document.querySelector('#coffeeAndBooksMap'),
        {
            center: { lat: 40.41961125480309, lng: -3.6998842704720856 },
            zoom: 12,
        }
    )
}

function getPlaces() {

    axios.get('/API/places')
        .then(({ data }) => renderMarkers(data))
        .catch(err => console.log(err))
}

function renderMarkers(places) {

    const { Marker } = google.maps

    places.forEach(place => {

        const position = {
            lng: place.location.coordinates[0],
            lat: place.location.coordinates[1],
        }

        new Marker({ position, title: place.name, map })
    })
}