let map;

window.onload = () => {
    const placesMAD = {
        lat: 40.4366610,
        lng: - 3.7121337
    };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: placesMAD
    });

    let center = {
        lat: undefined,
        lng: undefined
    };
    getplaces()
};
function getplaces() {
    axios.get("/api")
        .then(response => {
            console.log("LA RESPUESTA DEL SERVIDOR ES", response)
            placePlaces(response.data.places)
        })
        .catch(error => console.log(error))
}


function placePlaces(places) {
    console.log('Places', places)
    places.forEach(place => {
        const center = {
            lat: place.location.coordinates[0],
            lng: place.location.coordinates[1]
        }
        new google.maps.Marker({
            position: center,
            map: map,
            title: place.name
        })
        map.setCenter({
            lat: place.location.coordinates[0],
            lng: place.location.coordinates[1]
        })
    })
}