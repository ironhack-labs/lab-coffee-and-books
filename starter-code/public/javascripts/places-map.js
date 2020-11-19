let mapInstance

function initApp() {
    drawMap()
    getPlacesFromAPI()
}


function drawMap() {

    mapInstance = new google.maps.Map(
        document.querySelector('#placesMap'),
        { center: { lat: 39.863390, lng: -4.027755 }, zoom: 13, styles: mapStyles.retro }
    )
}


function getPlacesFromAPI() {

    axios
        .get('/api/places')
        .then(response => drawMarkers(response.data))
        .catch(err => next(new Error(err)))
}


function drawMarkers(places) {

    places.forEach(elm => {

        let position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
        let imgMarker

        switch (elm.type) {     // Para cambiar el Marker según el valor de la key "type"

            case "coffee shop":
                imgMarker = "/images/coffeeMarker.png"
                break
            
            case "bookstore":
                imgMarker = "/images/bookMarker.png"
                break
            
            default:
                imgMarker = "/images/defaultMarker.png"
        }
   
        new google.maps.Marker({
            map: mapInstance,
            position,
            title: elm.name,
            icon: imgMarker
        })
    })

    mapInstance.setCenter({ lat: places[1].location.coordinates[0], lng: places[1].location.coordinates[1] })
}