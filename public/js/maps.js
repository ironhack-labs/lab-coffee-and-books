const ironhackCoords = { lat: 40.392521370648154, lng: - 3.6989879718518366 }

let myMap

function initMap() {
    renderMap()
    getRouteDetails()
}

function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#map'),
        { zoom: 12, center: ironhackCoords }
    )
}

function getRouteDetails() {
    fetch('/api/places')
        .then(res => res.json())
        .then(places => renderRoute(places))
        .catch(err => console.log(err))
}

function renderRoute(places) {

    places.forEach(elm => {

        const placesCoords = {
            lat: elm.location.coordinates[0],
            lng: elm.location.coordinates[1]
        }
        new google.maps.Marker({
            map: myMap,
            position: placesCoords,
            title: elm.name
        })
    });
}