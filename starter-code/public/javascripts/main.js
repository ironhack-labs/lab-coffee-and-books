let myMap

window.onload = () => {

    const valdemoro = {
        lat: 40.190669,
        lng: -3.677518
    };


    myMap = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 16,
        center: valdemoro
    });

    getPlaces()

}

function getPlaces() {
    
    axios.get("/places/api")
    .then( response => {
        console.log("LA RESPUESTA DEL SERVIDOR ES", response)
        placePlaces(response.data.placesArray)
    })
    .catch(err => console.log(err))
}

function placePlaces(places){

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
        
    });
}
