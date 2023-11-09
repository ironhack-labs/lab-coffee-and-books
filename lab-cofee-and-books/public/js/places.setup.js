const Coords = { lat: 40.407248013600544, lng: -3.7295574513849807 }
let myMap

function init() {
    renderMap()
    getPlaceFromAPI()
}                                       //igual tengo que cambiar el nombre de la funcion en el script

function renderMap() {
    myMap = new google.maps.Map(                    //eso es de la api de google maps
        document.querySelector('#myMap'),
        {
            zoom: 13,
            center: Coords,
        }
    )
}

function getPlaceFromAPI() {

    axios                                                                    //esto son las peticiones de axios, desde el cliente
        .get('/api/places')                                                  // ese api/places es la ruta
        .then(response => (printPlacesMarkers(response.data)))                  //aquí puedo ver el JSON en el servidor si pongo la ruta /api/places y no pongo la funcion printPlacesMarkers, porque estaria enseñando la info tal cual
        .catch(err => console.log(err))                                              // es el cliente el que hace la petición!!
}

function printPlacesMarkers(places) {

    places.forEach(elm => {
        const position = { lat: elm.location.coordinates[1], lng: elm.location.coordinates[0] }

        new google.maps.Marker({
            map: myMap,
            position,
            title: elm.name
        })
    })
}


