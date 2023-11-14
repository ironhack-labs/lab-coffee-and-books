const coffeeShop = { lat: 40.40105997310492, lng: - 3.7550443420303705 }
let myMap

function init() {
    renderMap()
    getRestauranteFromAPI()
}

function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 13,
            center: coffeeShop,
        }
    )
}

function getRestauranteFromAPI() {

    axios
        .get('/apiRoutes/places')
        .then(response => printRestaurantsMarkers(response.data))
        .catch(err => console.log(err))
}

function printRestaurantsMarkers(restaurants) {

    restaurants.forEach(elm => {

        const position = { lat: elm.location.coordinates[1], lng: elm.location.coordinates[0] }

        new google.maps.Marker({
            map: myMap,
            position,
            title: elm.name
        })
    })
}