
let mapInstance


function initApp() {
    drawMap()
    getPlacesFromAPI()
}

function drawMap() {
    mapInstance = new google.maps.Map(
        document.querySelector('#placesMap'),
        { center: { lat: 40.426569, lng: -3.695074 }, zoom: 16, styles: mapStyles.retro }
    )
}


function getPlacesFromAPI() {

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
}


