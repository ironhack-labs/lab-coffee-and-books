const initCoords = { lat: 40.392521370648154, lng: - 3.6989879718518366 }
// const initCoords = navigator.geolocation.getCurrentPosition(
//     position => setMapCenter(position),
//     error => console.log('Hay un error ->', error)
// )

function initMap() {

    const myMap = new google.maps.Map(
        document.querySelector('#map'),
        {
            zoom: 15,
            center: initCoords,
        }
    )

    new google.maps.Marker({

        map: myMap,
        position: initCoords,
        title: 'Middle of the earth'
    })
}
