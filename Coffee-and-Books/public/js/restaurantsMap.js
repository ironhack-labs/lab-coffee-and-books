let myMap

function initViewMarkers() {
    initMap()
    getLocationsJSON()
}


function initMap() {
    myMap = new google.maps.Map(
        document.querySelector('#map'),
        { zoom: 12, center: { lat: 40.392521370648154, lng: - 3.6989879718518366 }, }
    )
}


function getLocationsJSON() {
    fetch('/api/locations')
        .then(res => res.json())
        .then(locationsJSON => renderLocationsMarkers(locationsJSON))
        .catch(err => console.log(err))
}


function renderLocationsMarkers(locationsJSON) {

    locationsJSON.forEach(elm => {

        const locationCoords = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }

        new google.maps.Marker({
            map: myMap,
            position: locationCoords,
            title: elm.name
        })

    })
}

