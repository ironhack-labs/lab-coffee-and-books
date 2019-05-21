window.onload = () => {

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {
            lat: 41.386230,
            lng: 2.174980
        }
    })

    let center = {
        lat: undefined,
        lng: undefined
    }

    getPlaces(map)
}




function getPlaces(map) {
    axios.get("/api")
        .then(response => placePlaces(response.data.places, map))
        .catch(error => console.log(error))
}


const placePlaces = (Place, myMap) => {

    Place.forEach(pla => {

        const location = {
            lat: pla.location.coordinates[1],
            lng: pla.location.coordinates[0]
        }

        new google.maps.Marker({
            position: location,
            map: myMap,
            title: pla.name
        })
    })
}