

const ironhack = { lat: 40.392521370648154, lng: - 3.6989879718518366 }
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
            center: ironhack
        }
    )
}

function getPlacesFromAPI() {
    axios
        .get('/api/places')
        .then(response => printPlacesMarkers(response.data))
        .catch(err => console.log(err))
}

function printPlacesMarkers(places) {
    //console.log(places)
    places.forEach(elm => {
        console.log(elm)
        const position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }

        new google.maps.Marker({
            map: myMap,
            position,
            title: elm.name
        })
    })
}