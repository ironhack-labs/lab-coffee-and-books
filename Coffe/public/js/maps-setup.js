const sol = { lat: 40.4167278, lng: -3.7033387 }
let myMap
function init() {
    console.log(" estoy en init")
    renderMap()
    getMarkers()
}

function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 15,
            center: sol,
        }
    )
}



function getMarkers() {
    console.log("estoy en get market")

    axios
        .get('/api/places')
        .then(response => printPlacesMarkers(response.data))
        .catch(err => console.log(err))
}

function printPlacesMarkers(places) {
    console.log("estoy painting")


    places.forEach(elm => {

        const position = { lat: elm.location.coordinates[1], lng: elm.location.coordinates[0] }
        new google.maps.Marker({
            map: myMap,
            position,
            title: elm.name
        })
    })
}