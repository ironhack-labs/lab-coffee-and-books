const ironhackCoords = { lat: 40.392521370648154, lng: - 3.6989879718518366 }

let myMap


function init() {

    renderMap()
    getCoffeBook()

}

function renderMap() {


    myMap = new google.maps.Map(
        document.querySelector('#Maps'),
        {
            zoom: 13,
            center: ironhackCoords
        }
    )
}

function getCoffeBook() {

    axios
        .get('/api/coffeBook')
        .then(resp => printCoffeBook(resp.data))
        .catch(err => console(err))
}


function printCoffeBook(coffeBook) {

    coffeBook.forEach(elm => {

        const position = { lat: elm.location.coordinates[1], lng: elm.location.coordinates[0] }

        new google.maps.Marker({
            map: myMap,
            position,
            title: elm.name
        })

    })
}