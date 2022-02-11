

function myMap() {
    drawMap()
    getBusiness()
}

let map
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
function getBusiness() {
    axios.get('/api/map/basico')
        .then(res => pintPlace(res.data))
        .catch(err => console.log(err))
}
function pintPlace(place) {
    const { Marker } = google.maps
    place.forEach(elm => {
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