let map



function renderMap() {
    map = new google.maps.Map(
        document.querySelector('#myMap'),
        { zoom: 14, center: { lat: 40.3671636395474, lng: -3.4857208118844882 }, styles: mapStyles.aubergine }
    )
}

function init() {
    renderMap()
    getPlacesFromDB()
}

function getPlacesFromDB() {

    axios
        .get('/api/places')
        .then(response => {
            console.log(response)
            response.data.forEach(element => {
                console.log(element)
                let position = { lat: element.location.coordinates[0], lng: element.location.coordinates[1] }
                new google.maps.Marker({ position, map })
            });

            map.setCenter({ lat: response.data[0].location.coordinates[0], lng: response.data[0].location.coordinates[1] })
        })
        .catch(err => console.log(err))
}
