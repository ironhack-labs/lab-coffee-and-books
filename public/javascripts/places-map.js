let map

function initMap() {
    getPlacesData()
}

function getPlacesData() {

    axios.get('/api')
        .then(response => drawMap(response.data))
        .catch(err => console.log(err))
}


function drawMap(places) {

    map = new google.maps.Map(document.querySelector('#placesMap'), {
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 15,
    })

    places.forEach(elm => {

        let center = {
            lat: elm.location.coordinates[1],
            lng: elm.location.coordinates[0]
        }

        new google.maps.Marker({
            map,
            position: center
        })
    })

    map.setCenter({
        lat: places[0].location.coordinates[1],
        lng: places[0].location.coordinates[0]
    })
}