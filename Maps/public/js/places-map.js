const initialCoords = { lat: 40.416883396122685, lng: -3.7032626690353565 }
let myMap

function init() {
    renderMap()
    getStoresData()
}

function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        { zoom: 15, center: initialCoords, }
    )
}

function getStoresData() {

    axios
        .get('/api/place')
        .then(response => printMarkers(response.data))
        .catch(err => console.log(err))
}

function printMarkers(places) {

    places.forEach(elm => {

        const position = {
            lat: elm.location.coordinates[1],
            lng: elm.location.coordinates[0]
        }

        new google.maps.Marker({
            position,
            map: myMap,
            title: elm.name
        })
    })
}