const initCoords = { lat: 40.392521370648154, lng: - 3.6989879718518366 }
let myMap
// const initCoords = navigator.geolocation.getCurrentPosition(
//     position => setMapCenter(position),
//     error => console.log('Hay un error ->', error)
// )
axios
    .get('/api/rests')
    .then(({ data }) => setMarkers(data))
    .catch(err => console.log(err))

function initMap() {

    myMap = new google.maps.Map(
        document.querySelector('#map'),
        {
            zoom: 15,
            center: initCoords,
        }
    )

}

function setMarkers(rests) {

    rests.forEach(elm => {

        console.log(elm.name)

        const lat = elm.location.coordinates[0]
        const lng = elm.location.coordinates[1]

        new google.maps.Marker({

            map: myMap,
            position: lat, lng,
            title: elm.name
        })
    })

}