window.onload = () => {

    let map

    getPlaces()

    function getPlaces() {

        axios.get('/api/places')
            .then(response => drawMap(response.data))
            .catch(err => next(err))
    }

    const markers = []


    function drawMap(places) {

        map = new google.maps.Map(document.querySelector('#placesMap'), {
            center: {
                lat: 40.453062, //Mejor estadio del mundo....
                lng: -3.688348
            },
            zoom: 14,
        })

        places.forEach(elm => {

            let center = {
                lat: elm.location.coordinates[0],
                lng: elm.location.coordinates[1]
            }

            let pin = new google.maps.Marker({
                map,
                position: center, 
                title: elm.name
            })

            markers.push(pin)

            console.log(elm.location.coordinates)
        })

        map.setCenter({
            lat: places[0].location.coordinates[0],
            lng: places[0].location.coordinates[1]
        })
    }

}