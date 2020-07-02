let myMap

//Inicialización del mapa
window.onload = () => {

    const madrid = {
        lat: 40.416816,
        lng: -3.703478
    };

    myMap = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 16,
        center: madrid
    })

    getPlaces()
}

//Llama a la ruta places/api, ejecutando la creación del json y recibiéndolo en el then, donde se llama a la función de setPlaces con los datos recibidos
function getPlaces() {
    axios.get("/places/api")
        .then(res => {
            console.log('La respuesta del servidor es: ', res)
            setPlaces(res.data.places)
        })
}

//Se lee y pinta las coordenadas de cada lugar recogido en el json, que es un array de todos los lugares registrados en la BD.
function setPlaces(places) {
    places.forEach(place => {
        const center = {
            lat: place.location.coordinates[0],
            lng: place.location.coordinates[1]
        }
        new google.maps.Marker({
            position: center,
            map: myMap,
            title: place.name
        })
    })

    //Centra el mapa en el primer dato del array.
    myMap.setCenter({
        lat: places[0].location.coordinates[0],
        lng: places[0].location.coordinates[1]
    })
}