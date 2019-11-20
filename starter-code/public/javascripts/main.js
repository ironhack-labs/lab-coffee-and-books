function getAllCoffeBooksFromTheAPI(myMap) {
    axios.get("/places/api")
        .then(response => placeCoffeBooks(response.data.places, myMap))
        .catch(error => console.log(error))
}

function placeCoffeBooks(places, myMap) {

    places.forEach(elm => {

        const center = {
            lat: elm.location.coordinates[1],
            lng: elm.location.coordinates[0]
        }

        new google.maps.Marker({
            position: center,
            map: myMap,
            title: elm.name
        });

    })
}


function initMap() {

    const myMap = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {
            lat: 41.3977381,
            lng: 2.190471916
        }
    })

    getAllRestaurantsFromTheAPI(myMap)
}