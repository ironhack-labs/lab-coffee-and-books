
let myMap
function initMap() {
    renderMap()
    getPlaces()
}

function getPlaces() {
    console.log('axios')
    axios
        .get('/api/palces')
        .then(response => setMarkers(response.data))
        .catch(err => console.log(err))
}

function setMarkers(places) {
    places.forEach(element => {
        const lat = element.location.coordinates[0]
        const lng = element.location.coordinates[1]

        new google.maps.Marker({
            map: myMap,
            position: { lat, lng },
            title: element.name,
        })

    });
}



function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#myMap'), {
        zoom: 15,
        center: { lat: 40.392635198409224, lng: - 3.6986031017746086 }

    }

    )

}