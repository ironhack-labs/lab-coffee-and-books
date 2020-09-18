let map

function initMap() {

    getPlacesData()

}

function getPlacesData() {

    axios.get('/api/place')
        .then(response => drawMap(response.data))
        .catch(err => console.log('Hubo un error:', err))
}

function drawMap(places) {

    map = new google.maps.Map(document.querySelector('#map'), {
        center: { lat: 0, lng: 0 },
        zoom: 10,
    })

    places.forEach(element => {
        
        let center = {
            lat: elm.location.coordinates[1],
            lng: elm.location.coordinates[0]
        }

        new.google.maps.Marker({ map, position: center })
        
    })

    map.setCenter({lat: places[0].location.coordinates[1], lon: places[0].location.coordinates[0]})

}
