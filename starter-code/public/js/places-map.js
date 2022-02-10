let map
function initMap() {
    drawMap()
    printMarker()
}

function drawMap() {
    const { Map } = google.maps
    const inputs = document.querySelectorAll('.d-none input')

    const latitude = Number(inputs[0].value)
    const longitude = Number(inputs[1].value)

    map = new Map(
        document.getElementById('myMap'),
        {
            zoom: 20,
            center: { lat: latitude, lng: longitude }
        }
    )
}

function printMarker() {
    const { Marker } = google.maps
    const inputs = document.querySelectorAll('.d-none input')

    const latitude = Number(inputs[0].value)
    const longitude = Number(inputs[1].value)

    new Marker({
        map,
        position: {
            lat: latitude,
            lng: longitude
        }
    })
}