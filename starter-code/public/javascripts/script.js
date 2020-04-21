let myMap

window.onload = () => {

    const Vallekas = {
        lat: 40.393664,
        lng: -3.659637
    };


    myMap = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 16,
        center: Vallekas
    });

    getPlaces()

}

function getPlaces() {
    axios.get("/api")
        .then(placesApi => {

            const place = placesApi.data

            place.forEach(elm => {
                const center = {
                    lat: elm.location.coordinates[0],
                    lng: elm.location.coordinates[1]
                }
                new google.maps.Marker({
                    position: center,
                    map: myMap,
                    title: elm.name
                })
            })
        })
         .catch(error => console.log(error))
}