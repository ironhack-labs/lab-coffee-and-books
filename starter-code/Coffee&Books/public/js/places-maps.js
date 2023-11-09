const startPoint = { lat: 40.48069488341425, lng: -3.7219832128804042 } // Las Cubas, el mejor bar del mundo

let myMap

function init() {
    renderMap()
    getPlacesFromAPI()
}

function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 25,
            center: startPoint,
        }
    )
}

function getPlacesFromAPI() {

    axios
        .get('/api/map')
        .then(response => printPlaceMarkers(response.data))
        .catch(err => console.log(err))
}

function printPlaceMarkers(places) {

    places.forEach(elm => {

        const position = { lat: elm.location.coordinates[1], lng: elm.location.coordinates[0] }

        new google.maps.Marker({
            map: myMap,
            position,
            title: elm.name
        })
    })
}