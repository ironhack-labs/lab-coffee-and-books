let map

function renderMap(){
    printMap()
    getPlaces()
}

function printMap(){
    const {Map} = google.maps

    map = new Map(
        document.getElementById("myMap"),{
            zoom: 10,
            center: {lat: 40.392499, lng: -3.698214},
            styles: mapStyles.retro
        }
    )
}

function getPlaces(){
    axios.get("/api/maps")
        .then(response => printPlaces(response.data))
        .catch(err => console.log(err))
}

function printPlaces(places){
    const {Marker} = google.maps

    places.forEach(element => {
        
        new Marker({
            map,
            position: {
                lat: element.location.coordinates[0],
                lng: element.location.coordinates[1]
            },
            title: element.name    
        })
    });
}