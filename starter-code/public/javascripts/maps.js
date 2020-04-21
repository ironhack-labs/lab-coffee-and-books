let initialCoords = {
        lat: 41.3977381,
        lng: 2.190471916
    },
    myMap

function initMap() {
    let mapOptions = {
        center: initialCoords,
        zoom: 5
    }
    myMap = new google.maps.Map(document.querySelector('#placesMap'), mapOptions)
    getPlaces()
}


function getPlaces() {

    axios.get("/locations/api")
        .then(response => {
            const allPlaces = response.data
            console.log('el array de places es:', allPlaces)
            placeLocationsInMap(allPlaces)
        })
        .catch(error => console.log(error))
}


function placeLocationsInMap(place) {

    place.forEach(place => {
        const center = {
            lat: place.location.coordinates[1],
            lng: place.location.coordinates[0]
        }
        new google.maps.Marker({
            position: center,
            map: myMap,
            title: place.name
        })
    })
}