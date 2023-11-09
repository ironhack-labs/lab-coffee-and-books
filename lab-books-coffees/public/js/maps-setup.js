const ironhack = { lat: 40.392521370648154, lng: - 3.6989879718518366 }


function renderMap() {
    const myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 20,
            center: ironhack,
        }
    )
    new google.maps.Marker({
        map: myMap,
        position: ironhack
    })
}