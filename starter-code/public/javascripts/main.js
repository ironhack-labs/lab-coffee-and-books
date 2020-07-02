let myMap

window.onload = () => {


    const Madrid = {

        lat: 40.4021314,
        lng: -3.7235911

    }

    myMap = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 16,
        center: Madrid
    });

    getPlaces()

}

function getPlaces() {
    axios
    .get("/api")
        .then(response => {
            console.log("LA RESPUESTA DEL SERVIDOR ES", response)
            placePlaces(response.data.places)
        })
        .catch(error => console.log(error))
}


function placePlaces(places) {
    places.forEach(place => {
        const center = {
            lat: place.location.coordinates[1],
            lng: place.location.coordinates[0]
        }
        new google.maps.Marker({
            position: center,
            map: myMap,
            title: place.name
        })
    })

    
}