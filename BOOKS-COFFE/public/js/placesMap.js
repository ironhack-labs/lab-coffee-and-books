let myMap

axios
    .get('/api/places')
    .then(({ data }) => setMarkers(data))
    .catch(err => next(err))

function initMap() {

    myMap = new google.maps.Map(
        document.querySelector('#map'),
        {
            zoom: 10,
            center: { lat: 37.88784809933999, lng: -4.787674062593143 }
        }
    )
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
