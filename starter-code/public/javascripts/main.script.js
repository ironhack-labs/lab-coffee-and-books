let initialCoords = { lat: 41.3977381, lng: 2.190471916 }, myMap

function initMap() {
    let mapOptions = { center: initialCoords, zoom: 5 }
    myMap = new google.maps.Map(document.querySelector('#placesMap'), mapOptions)
    getPlaces()
}


function getPlaces() {

    axios.get("/place/api")
        .then(response => {
            const allPlaces = response.data
            console.log('el array de restaurantes es:', allPlaces)
            placeRestaurantsInMap(allPlaces)
        })
        .catch(error => console.log(error))
}


function placeRestaurantsInMap(places) {

    places.forEach(place => {
        const center = { lat: place.location.coordinates[1], lng: place.location.coordinates[0] }
        new google.maps.Marker({ position: center, map: myMap, title: place.name })
    })
}

