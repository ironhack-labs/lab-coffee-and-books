const initialCoords = { lat: 40.4460495560349, lng: -3.6759638264748986 }
let myMap

function init() {
    renderMap()
    getRestaurantsData()
}


function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        { zoom: 15, center: initialCoords, }
    )
}

function getRestaurantsData() {

    axios
        .get('/api/places')
        .then(response => printMarkers(response.data))
        .catch(err => console.log(err))
}


function printMarkers(places) {
    console.log("hola")
    places.forEach(elm => {

        const position = {
            lat: elm.location.coordinates[1],
            lng: elm.location.coordinates[0]
        }

        new google.maps.Marker({
            position,
            map: myMap,
            title: elm
        })
    })
}

