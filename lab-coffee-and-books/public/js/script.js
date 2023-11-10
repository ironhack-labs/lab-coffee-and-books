const myCoordinates = {
    lat: 40.453577520458616,
    lng: -3.6881191232932293
}
let map

function init() {
    renderMap()
    getPlacesFromApi()
}

function renderMap() {
    map = new google.maps.Map(
        document.querySelector('#map'),
        {
            zoom: 17,
            center: myCoordinates
        }
    )
}

function getPlacesFromApi() {
    axios
        .get('/api/places')
        .then(places => {
            return printMarkers(places.data)
        })
        .catch(err => console.log(err))
}

function printMarkers(items) {
    items.forEach(element => {
        const coords = {
            lat: element.location.coordinates[0],
            lng: element.location.coordinates[1]
        }

        new google.maps.Marker(
            {
                map: map,
                position: coords,
                title: element.name
            }
        )
    })
}