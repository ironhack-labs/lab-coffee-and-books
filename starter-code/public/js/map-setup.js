let map

function initMap() {
    drawMap()
    getPlaces()

}

function drawMap() {
    const { Map } = google.maps

    const map = new Map(
        document.getElementById('myMap'),
        {
            zoom: 10,
            center: { lat: 40.392499, lng: -3.698214 }
        }
    )
}

function getPlaces() {
    axios.get('/api/places')
        .then(response => {
          
            printPlacesMarkers(response.data)}) 
        .catch(err => console.log(err))
}

function printPlacesMarkers(places) {

    const { Marker } = google.maps

    places.forEach(element => {
        // console.log(element.location.coordinates[0])
        new Marker({
            map,
            position: {
                lat: element.location.coordinates[0],               
                lng: element.location.coordinates[1]
            },
            title: element.name,
        })
    
    });
}

// function initMap() {
//     const { Map, Marker } = google.maps

//     const map = new Map(
//         document.getElementById('myMap'),
//         {
//             zoom: 10,
//             center: { lat: 40.392499, lng: -3.698214 }
//         }
//     )
//     new Marker({
//         position: { lat: 40.392499, lng: -3.698214 },
//         map
//     })
// }