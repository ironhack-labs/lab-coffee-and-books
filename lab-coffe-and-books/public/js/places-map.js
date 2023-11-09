const initialCoords = { lat: 40.3954787260636, lng: -3.701553889536562 }

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
        .get('/api/place')
        .then(response => printMarkers(response.data))
        .catch(err => console.log(err))
}

function printMarkers(places) {

    places.forEach(element => {

        const position = {
            lat: element.location.coordinates[0],
            lng: element.location.coordinates[1]
        }

        new google.maps.Marker({
            position,
            map: myMap,
            title: element.name
        })
    })
}