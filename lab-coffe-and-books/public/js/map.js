const coordsSOL = {
    lat: 40.4169,
    lng: -3.7035
}

let map;
function renderMap() {

    map = new google.maps.Map(
        document.querySelector('#mainMap'),
        {
            zoom: 6,
            center: coordsSOL,
        }
    )

    getPlaces();
}

function getPlaces() {

    axios
        .get('/api/places')
        .then(response => printMarkers(response.data))
        .catch(err => console.log(err))
}

function printMarkers(places) {

    console.log(places)

    places.forEach(place => {

        let position = { lat: place.location.coordinates[0], lng: place.location.coordinates[1] }

        new google.maps.Marker({ position, map })
    })

}