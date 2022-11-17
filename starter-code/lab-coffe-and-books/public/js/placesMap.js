let map

function init() {
    console.log('klk otra vez')
    renderMap()
    getPlaces()

}

function renderMap() {
    // console.log('klk')
    map = new google.maps.Map(
        document.querySelector('#storeMap'),
        {
            zoom: 8,
            center: {
                lat: 40.464480410412605,
                lng: - 3.1658755370926337,
            }
        }
    )
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
            map: map,
            position: { lat, lng },
            title: elm.name
        })
    })
}

