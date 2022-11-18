let placesMap

function initMap() {
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
        document.getElementById('placesMap'),
        {
            zoom: 16,
            center: { lat: 28.466286410545266, lng: - 16.25171950391105 },
            title: 'Hogar Dulce Hogar'
        }
    )
}