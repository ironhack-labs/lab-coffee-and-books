const ironhackCoords = { lat: 40.392521370648154, lng: - 3.6989879718518366 }
let myMap

axios
    .get('/apiplaces')
    .then(({ data }) => setMarkers(data))
    .catch(err => next(err))


function initMap() {

    myMap = new google.maps.Map(
        document.querySelector('#map'),
        {
            zoom: 12,
            center: ironhackCoords,
        }
    )
}


function setMarkers(apiplaces) {

    apiplaces.forEach(elm => {

        const lat = elm.location.coordinates[0]
        const lng = elm.location.coordinates[1]

        new google.maps.Marker({
            map: myMap,
            position: { lat, lng },
            title: elm.name
        })
    })
}