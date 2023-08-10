const initialCoords = { lat: 40.41690503660961, lng: -3.7037848584304696 }

let myMap

function init() {
    renderMap()
    getPlacesData()
}

function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        { zoom: 15, center: initialCoords }
    )
}


function getPlacesData() {

    axios
        .get('/api/places')
        .then(response => printMarkers(response.data))
        .catch(err => console.log(err))
}

function printMarkers(places) {

    places.forEach(element => {

        const position = {
            lat: element.location.coordinates[1],
            lng: element.location.coordinates[0]

        }
        console.log(position)
        new google.maps.Marker({
            position,
            map: myMap,
            title: element.name
        })

    })
}

p