let mapInstance

function initApp() {
    drawMap()
    getPlacesFromAPI()
    
    function drawMap() {
        mapInstance = new google.maps.Map(
            document.querySelector('#map'), 
            {
                center: { lat: 40.421855, lng: -3.681677 },
                zoom: 15,
                styles: mapStyle.retro
            }
        )
    } 


    function getPlacesFromAPI() {

        axios
            .get('/api/places')
            .then(response => {
                console.log(responde.data)
                drawMarkers(response.data)
            })
        .catch(err => console.log(err))
    }


    function drawMarkers(places) {
        places.forEach(elm => {
            let position = { lat: elm.location.coordinates[0], lng: places[1].location.coordinates[1] }
            
            new google.maps.Marker({
                map: mapInstance,
                position,
                title: elm.name
            })
        })

        mapInstance.setCenter({ lat: places[1].location.coordinates[0], lng: places[1].location.coordinates[1] })
    }

    
      
}