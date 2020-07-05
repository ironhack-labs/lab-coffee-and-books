let myMap

window.onload = () => {

    const coffeeFaborit = {
        lat: 41.386230,
        lng: 2.174980
    };


    myMap = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 16,
        center: coffeeFaborit
    });

    let center = {
        lat: undefined,
        lng: undefined
    }

    getPlaces()

}



function getPlaces() {
    axios.get("/places/api")
        .then(response => {
            console.log("LA RESPUESTA DEL SERVIDOR ES", response)
            searchPlaces(response.data.places)
        })
        .catch(error => console.log(error))
}


function searchPlaces(places) {
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

    myMap.setCenter({
        lat: places[0].location.coordinates[1],
        lng: places[0].location.coordinates[0]
    })
}