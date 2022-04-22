let map

function initMap() {
    renderMap()
    getStores()

}

function renderMap() {
    const { Map } = google.maps
    map = new Map(
        document.querySelector('#store-maps'),

        {
            center: { lat: 40.392499, lng: -3.698214 },
            zoom: 15,
        }
    )

}
function getStores() {
    axios.get('api/stores')
        .then(({ data }) => placeMarkers(data))
        .catch(err => consoel.log(err))
}


function placeMarkers(stores) {

    const { Marker } = google.maps

    stores.forEach(stores => {

        const position = {
            lat: stores.location.coordinates[1],
            lng: stores.location.coordinates[0],
        }

        new Marker({ position, title: stores.name, map })
    })
}
