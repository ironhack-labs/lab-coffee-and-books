const centerCoords = { lat: 40.42381638421355, lng: -3.7123717478599163 }
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
            center: centerCoords,
        }
    )
}

function getPlaceFromAPI() {
    console.log("estoy en get")
    axios
        .get("/api/places")
        .then(response => printPlacesMarkers(response.data))
        .catch(err => console.log(err))
}

function printPlacesMarkers(places) {
    console.log(places)
    places.forEach(elm => {

        const position = { lat: elm.location.coordinates[1], lng: elm.location.coordinates[0] }
        new google.maps.Marker({
            map: myMap,
            position,
            title: elm.name
        })
    })
}