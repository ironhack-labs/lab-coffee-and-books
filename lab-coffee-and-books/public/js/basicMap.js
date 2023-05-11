const ironhackCoords = { lat: 40.392521370648154, lng: - 3.6989879718518366 }

function initMap() {

    const basicMap = new google.maps.Map(
        document.querySelector('#basicMap'),
        {
            zoom: 15,
            center: ironhackCoords,
        }
    )

    new google.maps.Marker({
        map: basicMap,
        position: ironhackCoords,
        title: 'Ironhack Matadero'
    })
}