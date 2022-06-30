let map

function init() {
    renderMap()
    getPlacesFromDB()
}


function renderMap() {
    map = new google.maps.Map(
        document.querySelector('#my-map'),
        { zoom: 14, center: { lat: 40.392815517153096, lng: 3.6986977949705904 }, styles: mapStyles.retro }
    )
}


function getPlacesFromDB() {

    axios
        .get('/api')
        .then(response => printMarkers(response.data))
        .catch(err => console.log(err))
}


function printMarkers(places) {
    places.forEach(place => {

        let position = { lat: place.location.coordinates[0], lng: place.location.coordinates[1] }

        new google.maps.Marker({ position, map })
    })

    map.setCenter({ lat: places[0].location.coordinates[0], lng: places[0].location.coordinates[1] })
}