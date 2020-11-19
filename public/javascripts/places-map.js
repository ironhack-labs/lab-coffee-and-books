window.onload = ()=> {
    let mapInstance

    initApp()

    function initApp() {
        drawMap()
        getPlacesFromAPI()
    }


    function drawMap() {
        mapInstance = new google.maps.Map(
            document.querySelector('#placesMap'),
            { center: { lat: 40.370314, lng: -3.691913 }, zoom: 16, styles: mapStyles.retro }
        )
    }

    function getPlacesFromAPI() {

        axios
            .get('/api/places')
            .then(response => drawMarkers(response.data))
            .catch(err => console.log(err))
    }


    function drawMarkers(places) {

        places.forEach(elm => {

            let position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }

            new google.maps.Marker({
                map: mapInstance,
                position,
                title: elm.name
            })
        })

        mapInstance.setCenter({ lat: places[1].location.coordinates[0], lng: places[1].location.coordinates[1] })
    }
} 
