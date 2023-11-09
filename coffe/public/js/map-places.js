
const initialCoords = { lat: 40.392521370648154, lng: - 3.6989879718518366 }
let myMap

function init() {
    renderMap()
    getPlacesFromAPI()
}

function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 15,
            center: initialCoords,
        }
    )
}

function getPlacesFromAPI() {

    placesService
        .getAllPlaces()
        .then(places => printPlacesMarkers(places.data))
        .catch(err => console.log(err))

}

function printPlacesMarkers(places) {
    places.forEach(elm => {

        const position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }

        console.log(position)

        new google.maps.Marker({
            map: myMap,
            position,
            title: elm.name
        })
    })
}