const plazaMayorCoords = { lat: 40.41564903880755, lng: -3.70766874860492 }
let myMap

function init() {
    renderMap()
    getPlaceFromAPI()
}


function renderMap() {

    myMap = new google.maps.Map(

        document.querySelector("#myMap"),
        {
            zoom: 10,
            center: plazaMayorCoords
        }
    )
}

function getPlaceFromAPI() {

    axios
        .get("/api/places")
        .then(response => printPlacesMarkers(response.data))
        .catch(err => console.log(err))
}

function printPlacesMarkers(places) {

    places.forEach(elm => {

        const position = { lat: elm.location.coordinates[1], lng: elm.location.coordinates[0] }

        new google.maps.Marker({
            map: myMap,
            position,
            title: elm.name
        })
    })
}