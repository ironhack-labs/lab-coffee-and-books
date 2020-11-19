let mapInstance

function initMap() {

    drawMap()
    getPlaces()

}

function drawMap() {
    mapInstance = new google.maps.Map(
        document.querySelector('#placesMap'),
        {
            center: directions.ironhackBCN.coords,
            zoom: 14,
            styles: mapStyles.retro
        }
    )

}

function getPlaces() {

    axios
        .get('/api/places')
        .then(response => drawMarkers(response.data))
        .catch(err => console.log(err))
}

function drawMarkers(places) {

    places.forEach(elm => {
        let position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
        new google.maps.Marker({
            map: mapInstance,
            position,
            title: elm.name
        })
    })

    mapInstance.setCenter({ lat: places[1].location.coordinates[0], lng: places[0].location.coordinates[1] })

}
