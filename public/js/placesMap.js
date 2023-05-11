let myMap

function initViewMarkers() {
    initMap()
    getPlacesJSON()
}
function initMap() {
    myMap = new google.maps.Map(
        document.querySelector("#map"),
        { zoom: 12, center: { lat: 40.23657284026873, lng: -3.772702492511238 }, }
    )
    console.log("prueba")
}

function getPlacesJSON() {
    fetch('/api/places')
        .then(res => res.json())
        .then(placesJSON => renderPlacesMarkers(placesJSON))
        .catch(err => console.log(err)) // NEXT=???
}

function renderPlacesMarkers(placesJSON) {

    placesJSON.forEach(elm => {

        const placesCoords = { lat: elm.location.coordinates[1], lng: elm.location.coordinates[0] }
        console.log(placesCoords)
        new google.maps.Marker({
            map: myMap,
            position: placesCoords,
            title: elm.name
        })
    })

}
