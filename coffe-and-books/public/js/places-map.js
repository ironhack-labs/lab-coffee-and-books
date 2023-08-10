const initialCoords = { lat: 40.43926468551843, lng: -3.7080926625975255 }

let myMap

function init() {
    renderMap()
    getPlacesData()
}

function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        { zoom: 15, center: initialCoords, }
    )
}

function getPlacesData() {

    axios
        .get('/api/places')
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
