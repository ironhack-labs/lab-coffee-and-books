let myMap

function init() {
    renderMap()
}

function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 16,
            center: { lat: 7.073365000301889, lng: -73.11252818908491 }
        }
    )
}

