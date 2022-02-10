let map



function initMap() {


    drawMap()
    getCoords()
    getPlaces()
    

}

//let latitude = undefined




function drawMap() {
    
    const { Map } = google.maps
   
    map = new Map(
        document.getElementById('myMap'),
        {
            zoom: 8,
            center: { 
                lat: 43.392499, 
                lng: -3.698214 },

        }
    )

}

function getPlaces() {

    axios.get('/api/places')
        .then(response => printPlacesMarkers(response.data))
        .catch(err => console.log(err))

}

function printPlacesMarkers(places) {

    const { Marker } = google.maps

    places.forEach(elm => {

        new Marker ({
            map, 
            position: {
                lat: elm.location.coordinates[0],
                lng: elm.location.coordinates[1]
            },
            title: elm.name
        })

    })
       
}

function getCoords() {

    navigator.geolocation.getCurrentPosition(
        geolocationDetails => centerMap(geolocationDetails),
        errorDetails => console.log('fallo --->', errorDetails)
    )
}
function centerMap(geolocationDetails) {

    const { latitude, longitude } = geolocationDetails.coords
    const position = { lat: latitude, lng: longitude }
    const { Marker } = google.maps

    map.setCenter(position)

    new Marker({ map, position })
}