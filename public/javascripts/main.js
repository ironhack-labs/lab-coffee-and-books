let map

function initMap() {
    getPlaceDataFromAPI()
}

function getPlaceDataFromAPI() {

    axios.get('/api/')
        .then(response => drawMap(response.data))
        .catch(err => console.log('Hubo un error:', err))
}


function drawMap(places) {
 
    map = new google.maps.Map(document.querySelector('#map'),
        {
            center: { lat: 0, lng: 0 },
            zoom: 14,
            styles: mapStyles.retro
        }
    )

    places.forEach(elm => {

        let center = {
            lat: elm.location.coordinates[0],
            lng: elm.location.coordinates[1]
        }

        new google.maps.Marker({ map, position: center })
    })

    map.setCenter({ lat: places[0].location.coordinates[0], lng: places[0].location.coordinates[1] })
}