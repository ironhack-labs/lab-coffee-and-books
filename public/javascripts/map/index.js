let maps


function initMap() {

    if (navigator.geolocation) {

        getPlacesData()

    } else {

        alert('Unable to reach geolocation module')

    }

}


function getPlacesData() {

    axios
        .get('/api/places')
        .then(response => drawMap(response.data))
        .catch(err => console.log('Hubo un error: ', err))

}


function drawMap(places) {

    map = new google.maps.Map(document.querySelector('#map'),
        {
            center: { lat: 0, lng: 0 },
            zoom: 15,
            styles: mapStyles.aubergine
        }
    )

    places.forEach(element => {

        let center = {
            lat: element.location.coordinates[1],
            lng: element.location.coordinates[0]
        }

        new google.maps.Marker({
            map,
            position: center,
            title: element.name
        })

    })

    map.setCenter({ lat: places[0].location.coordinates[1], lng: places[0].location.coordinates[0] })

}


