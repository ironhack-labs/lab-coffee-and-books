let myMap = undefined
window.onload = () => {
    const predeterminado = {
        lat: 40.390499,
        lng: -3.701725
    };
    let mapOptions = {
        zoom: 14,
        center: predeterminado,
        styles: mapStyles.retro
    }
    myMap = new google.maps.Map(document.getElementById("myMap"), mapOptions)
    getPlaces()
}

function getPlaces() {
    axios.get("/option/api")
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
            myMap.setCenter({
                lat: place[0].location.coordinates[0],
                lng: place[0].location.coordinates[1]
            })
        })
        .catch(error => console.log(error))
}