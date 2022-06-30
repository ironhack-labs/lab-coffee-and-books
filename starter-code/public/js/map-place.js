let map

function init() {
    renderMap()
    getCoffeFromDB()

}



function renderMap() {
    map = new google.maps.Map(
        document.querySelector('#myMap'),
        { zoom: 12, center: { lat: 40.43003011279524, lng: -3.7015183281091586 }, styles: mapStyles.yellowHumanMade }
    )


}

function getCoffeFromDB() {

    axios
        .get('/api/places')
        .then(response => printMarkers(response.data))
        .catch(err => console.log(err))
}


function printMarkers(places) {


    places.forEach(place => {

        let position = { lat: place.location.coordinates[0], lng: place.location.coordinates[1] }

        new google.maps.Marker({ position, map })
    })

    map.setCenter({ lat: places[0].location.coordinates[0], lng: places[0].location.coordinates[1] })
}