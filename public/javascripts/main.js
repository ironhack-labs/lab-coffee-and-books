const Place = require('./../models/place.model')

let myMap

window.onload = () => {

    const ironhackBCN = {
        name: ironHackBcN,
        type: {
            type: 'bookstore',
            lat: 41.386230,
            lng: 2.174980
        }
    };


    myMap = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 16,
        center: ironhackBCN
    });

    getPlaces()

}



function getPlaces() {
    axios.get("/places/api")
        .then(response => {
            console.log("Server reponse is ", response)
            locatePlaces(response.data.places)
        })
        .catch(error => console.log(error))
}


function locatePlaces(places) {
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

initMap = () => {

    let mapOptions = {
        center: directions.ironhackBCN.coords,
        zoom: 15,
        styles: mapStyles.night
    }
    const myMap = new google.maps.Map(document.querySelector('#myMap'), mapOptions)

    // Detalles de la ruta    
    const directionRequest = {
        origin: directions.ironhackBCN.coords,
        destination: 'Fabrik, Madrid, ES',
        travelMode: 'DRIVING'
    }

    const directionsService = new google.maps.DirectionsService

    directionsService.route(
        directionRequest,
        (response, status) => {
            console.log('El estado de la petición a directonsSevice ha sido:', status)
            console.log('La respuesta del directonsSevice ha sido:', response)

            const directionsDisplay = new google.maps.DirectionsRenderer
            directionsDisplay.setDirections(response)
            directionsDisplay.setMap(myMap)
        }
    )
}