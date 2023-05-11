let myMap

function initViewMarkers() {
    initMap()
    getplacesJSON()
}


function initMap() {
    myMap = new google.maps.Map(
        document.querySelector('#map'),
        { zoom: 12, center: { lat: 40.392521370648154, lng: - 3.6989879718518366 }, }
    )
}


function getplacesJSON() {
    fetch('/api/places')
        .then(res => res.json())
        .then(placesJSON => renderPlacesMarkers(placesJSON))
        .catch(err => console.log(err))
}


function renderPlacesMarkers(placesJSON) {

    placesJSON.forEach(elm => {

        const placeCoord = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }

        new google.maps.Marker({
            map: myMap,
            position: placeCoord,
            title: elm.name
        })

    })
}

