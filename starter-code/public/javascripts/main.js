



/*
function initMap() {

    const IronHackBCN = { lat: 41.3977381, lng: 2.190471916 }       // Respetar nombres propiedades

    const myMap = new google.maps.Map(
        document.getElementById('map'),
        {
            center: IronHackBCN,
            zoom: 10
        }
    )

    new google.maps.Marker({
        map: myMap,
        position: IronHackBCN,
        title: 'Los Ironhackers del mar'
    })
}
*/




/*
function initMap() {

    if (navigator.geolocation) {

        const myMap = new google.maps.Map(
            document.getElementById('map'),
            {
                center: { lat: 41.3977381, lng: 2.190471916 },
                zoom: 10
            }
        )

        // Recibe dos funciones como argumentos: fn de éxito, fn de error
        navigator.geolocation.getCurrentPosition(
            position => {

                console.log('Tu posición es:', position)

                const myLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }

                myMap.setCenter(myLocation)

                new google.maps.Marker({
                    map: myMap,
                    position: myLocation,
                    title: 'Ahora estás aquí'
                })

            },
            error => console.log(error)
        )

    } else {
        alert("Tu dispositivo no dispone de módulo de geolocalización")
    }
}

*/




/*
function initMap() {

    const directionsService = new google.maps.DirectionsService
    const directionsDisplay = new google.maps.DirectionsRenderer

    const IronHackBCN = { lat: 41.3977381, lng: 2.190471916 }
    const IronHackMad = { lat: 40.3922581, lng: -3.698573845 }


    const myMap = new google.maps.Map(
        document.getElementById('map'),
        {
            center: IronHackMad,
            zoom: 10
        }
    )

    directionsDisplay.setMap(myMap)

    calculateAndDisplay(directionsService, directionsDisplay, IronHackMad, IronHackBCN)
}


const calculateAndDisplay = (directionsService, directionsDisplay, orig, dest) => {

    directionsService.route({
        origin: orig,
        destination: dest,
        travelMode: google.maps.TravelMode['DRIVING']
    },
        (finalRoute, status) => {
            status === 'OK' ? console.log(finalRoute) : console.log('Error:', status)
        })
}

*/



function initMap() {


    const myMap = new google.maps.Map(

        document.getElementById('map'),
        {
            center: { lat: 40.3922581, lng: -3.698573845 },
            zoom: 10
        }
    )

    const geoCoder = new google.maps.Geocoder()

    geoCodeAdress(geoCoder, myMap)
}


const geoCodeAdress = (geoCoder, resultsMap) => {

    let address = document.getElementById('address').value

    geoCoder.geocode(
        { 'address': address },
        (results, status) => {

            console.log(results)


            new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            })

            resultsMap.setCenter(results[0].geometry.location)

        }
    )
}