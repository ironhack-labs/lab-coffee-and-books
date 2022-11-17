let myMap

function init() {
    renderMap()
    getPlaces()
}


function getPlaces() {

    axios
        .get('/api/places')
        .then(response => setMarkers(response.data))
        .catch(err => console.log(err))
}


function setMarkers(places) {

    places.forEach(elm => {

        const lat = elm.location.coordinates[0]
        const lng = elm.location.coordinates[1]

        new google.maps.Marker({
            map: myMap,
            position: { lat, lng },
            title: elm.name
        })
    })
}


function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 16,
            center: { lat: 40.4466299007422, lng: - 3.6746561949108187 }
        }
    )
}