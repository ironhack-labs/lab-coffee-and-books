const myCords = { lat: 40.397285476847344, lng: - 3.6981218131257987 }
let myMap


function init() {
    renderMap()
    getPlaces()
}

function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 14,
            center: myCords
        }
    )
}

function getPlaces() {

    axios
        .get('/api/places')
        .then(res => printPlaces(res.data))
        .catch(err => console.log(err))

}

function printPlaces(places) {

    places.forEach(e => {

        const position = { lat: e.location.coordinates[1], lng: e.location.coordinates[0] }

        new google.maps.Marker({
            map: myMap,
            position,
            title: e.name
        })
    })
}