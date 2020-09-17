let map

function initMap() {
    getPlacesDataFromAPI()
}

function getPlacesDataFromAPI() {

    axios.get('/api/')
        .then(response => drawMap(response.data))
        .catch(err => console.log('Hubo un error:', err))
}


function drawMap(places) {

    map = new google.maps.Map(document.querySelector('#map'), {
        center: {
            lat: 40.3,
            lng: -3.6
        },
        zoom: 17
    })

    places.forEach(elm => {
        console.log(elm)

        let center = {
            lat: elm.location.coordinates[0],
            lng: elm.location.coordinates[1]
        }

        new google.maps.Marker({
            map,
            position: center
        })
    })

    map.setCenter({
        lat: places[0].location.coordinates[0],
        lng: places[0].location.coordinates[1]
    })
}