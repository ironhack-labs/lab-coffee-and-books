const ironhackCoords = { lat: 40.392521370648154, lng: - 3.6989879718518366 }

function renderMap() {

    const myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 15,
            center: ironhackCoords,
        }
    )

    new google.maps.Marker({
        map: myMap,
        position: ironhackCoords
    })
}