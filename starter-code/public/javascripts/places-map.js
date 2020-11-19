// function initApp() {
//     const mapInstance = new google.maps.Map(document.querySelector('#map'),
//         {
//             center: { lat: 40.416775, lng: --3.703790 },
//             zoom: 12,
//             styles: mapStyles.retro
//         }
//     )


    // new google.maps.Marker({
    //     map: mapInstance,
    //     position: directions.ironhackBCN.coords,
    //     title: directions.ironhackBCN.title
    // })
// }



let mapInstance

function initApp() {
    drawMap()
    // getPlacesFromAPI()
}


function drawMap() {
    mapInstance = new google.maps.Map(
        document.querySelector('#map'),
        { center: { lat: 40.416775, lng: -3.703790 }, zoom: 15, styles: mapStyles.retro }
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