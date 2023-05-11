const ironhackCoords = { lat: 40.392521370648154, lng: - 3.6989879718518366 }

let myMap

function initViewMarkers() {
    initMap()
    getRestaurantsJSON()
}


function initMap() {
    myMap = new google.maps.Map(
        document.querySelector('#map'),
        { zoom: 12, center: { lat: 40.392521370648154, lng: - 3.6989879718518366 }, }
    )
}

function getRestaurantsJSON() {
    fetch('/api/restaurants')
        .then(res => res.json())
        .then(restaurantsJSON => renderRestaurantsMarkers(restaurantsJSON))
        .catch(err => console.log(err))
}

function renderRestaurantsMarkers(restaurantsJSON) {

    restaurantsJSON.forEach(elm => {

        const restaurantCoords = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }

        new google.maps.Marker({
            map: myMap,
            position: restaurantCoords,
            title: elm.name
        })

    })
}