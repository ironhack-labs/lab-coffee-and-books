let map

function mapInit() {

    drawMap()
    getPlace()
}

function drawMap() {

    const { Map } = google.maps

    map = new Map(
        document.querySelector('.veryBigMap'),
        {
            zoom: 5,
            center: { lat: 40.392499, lng: 12 },

        }
    )
}

function getPlace() {

    axios.get('/api/markers')
        .then(response => {
            printPlaceMarker(response.data)

            console.log(response.data)
        }

        )
        .catch(err => console.log(err))
}

function printPlaceMarker(arr) {

    const { Marker } = google.maps

    arr.forEach(elm => {
        console.log(elm)
        new Marker({
            map,
            position: {
                lat: elm.location.lat,
                lng: elm.location.lng
            },
            title: elm.name
        })
    })
}