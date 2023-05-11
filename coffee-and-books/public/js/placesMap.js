let myMap

function initViewMarkers() {
    initMap()
    getPlacesJSON()
}


function initMap() {
    myMap = new google.maps.Map(
        document.querySelector('#map'),
        { zoom: 13, center: { lat: - 37.81457368325429, lng: 144.96378859393087 }, }
    )
}

function getPlacesJSON() {
    fetch('/api/locations')
        .then(res => res.json())
        .then(placesJSON => renderPlacesMarkers(placesJSON))
    console.log(placesJSON)
        .catch(err => console.log(err))
}

function renderPlacesMarkers(placesJSON) {

    placesJSON.forEach(elm => {

        const placeCoords = { lat: elm.location.coordinates[1], lng: elm.location.coordinates[0] }
        console.log({ placeCoords })
        new google.maps.Marker({
            map: myMap,
            position: placeCoords,
            title: elm.name
        })
    })
}
