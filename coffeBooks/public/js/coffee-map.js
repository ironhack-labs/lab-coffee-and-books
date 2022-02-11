let map

function initMap() {
    drawMap()
    getCoffee()
}

function drawMap() {

    const { Map } = google.maps

    map = new Map(
        document.getElementById('myMap'),
        {
            zoom: 10,
            center: { lat: 40.392499, lng: -3.698214 },
            styles: mapStyles.aubergine
        }
    )
}

function getCoffee() {

    axios.get('/api/coffee')
        .then(response => printcoffeeMarkers(response.data))
        .catch(err => console.log(err))
}

function printCoffeeMarkers(coffees) {
    const { Marker } = google.maps

    coffees.forEach(elm => {

        new Marker({
            map,
            position: {
                lat: elm.location.coordinates[0],
                lng: elm.location.coordinates[1]
            },
            title: elm.name
        })
    })
}