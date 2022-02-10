let map

function initMap() {
    drawMap()
    getPlaces()
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

function getPlaces(){
    axios
         .get('/api/places')
         .then(response => printPlacesMarkers(response.data))
         .catch(err => console.log(err))
}

function printPlacesMarkers(places){
    const { Marker } = google.maps

    places.forEach(element => {

        new Marker({map,position:{
            lat:element.location.lat,
            lng: element.location.lng
        },
        title:element.name
    })
        
    });
}

