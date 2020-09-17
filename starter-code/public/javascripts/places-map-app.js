let map

function initMap() {
    getPlaceDataFromAPI()
}

function getPlaceDataFromAPI() {

    axios.get('/api/createpleace')
        .then(response => drawMap(response.data))
        .catch(err => console.log('Hubo un error:', err))
}


function drawMap(places) {

    map = new google.maps.Map(document.querySelector('#coffeesMap'),
        {
            center: { lat: 37.4020700, lng: -4.4868900 },
            zoom: 17
        }
    )

    places.forEach(elm => {

        let center = {
            lat: elm.location.coordinates[1],
            lng: elm.location.coordinates[0]
        }

        new google.maps.Marker({ map, position: center })
    })

    map.setCenter({ lat: places[0].location.coordinates[1], lng: places[0].location.coordinates[0] })
}