const initialCoords = { lat: 40.392521370648154, lng: -3.6989879718518366 }
let myMap

function init() {
    renderMap()
    getPlacesFromApi()
}

function renderMap() {
    myMap = new google.maps.Map(
        document.querySelector("#myMap"),
        {
            zoom: 10,
            center: initialCoords
        }
    )
}

function getPlacesFromApi() {

    axios
        .get('/api/places')
        .then(response => printPlacesMarkers(response.data))
        .catch(err => console.log(err))
}



function printPlacesMarkers(places) {

    places.forEach(elm => {

        const position = { lat: elm.location.coordinates[1], lng: elm.location.coordinates[0] }
        console.log(position)

        new google.maps.Marker({
            map: myMap,
            position,
            title: elm.name
        })
    })
}