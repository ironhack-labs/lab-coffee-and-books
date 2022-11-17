const chamberi = {
    coords: {
        lat: 40.43507837224236, lng: - 3.7114746511204695
    },
    title: 'Chamberi Centro'
}

let placesMap

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
            map: placesMap,
            position: { lat, lng },
            title: elm.name
        })
    })
}

function renderMap() {
    placesMap = new google.maps.Map(
        document.querySelector('#placesMap'),
        {
            zoom: 15,
            center: chamberi.coords
        }
    )
}