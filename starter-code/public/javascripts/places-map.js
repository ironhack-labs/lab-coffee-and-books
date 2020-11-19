let mapInstance

function initApp() {
    drawMap()
    getPlacesFromAPI()
}

function drawMap() {
    mapInstance = new google.maps.Map(
        document.querySelector('#placesMap'),
        { center: { lat: 51.520236, lng: -0.141151 }, zoom: 13, styles: mapStyles.vampire }
    )
}

function getPlacesFromAPI() {

    axios
        .get('/api/places')
        .then(response => drawMarkers(response.data))
        .catch(err => console.log("Error:", err))  
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

    mapInstance.setCenter({ lat: places[1].location.coordinates[0], lng: places[1].location.coordinates[1] })
}
