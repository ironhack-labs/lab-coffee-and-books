let map

function initMap(){
    drawMap()
    getPlaces()
}

function drawMap(){

    const {Map} = google.maps


    map = new Map(

        document.getElementById('myMap'),
        {

            zoom:10,
            center: { lat: 40.392499, lng: -3.698214}
        }
    )
}

function getPlaces(){
    axios.get('api/places')
    .then(response => printPlacesMarkers(response.data))
    .catch(err=>console.log(err))
}

function printPlacesMarkers(places){
    const {Marker} = google.maps

    places.forEach(elm => {
        new Marker({
            map,
            position:{
                lat: elm.location.coordinates[0],
                lng: elm.location.coordinates[1]
            },
            title: elm.name
        })
    });
}