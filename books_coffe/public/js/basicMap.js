let myMap

function initViewMarkers() {
    initMap()
    getPlacesJSON()
}


function initMap() {
    myMap = new google.maps.Map(
        document.querySelector('#map'),
        { zoom: 12, center: { lat: 40.47864608130367, lng: - 3.3693914420402176 }, }
    )
}


function getPlacesJSON() {
    fetch('/api/places')
        .then(res => res.json())
        .then(placesJSON => renderPlacesMarkers(placesJSON))
        .catch(err => console.log(err))
}


function renderPlacesMarkers(placesJSON) {

    placesJSON.forEach(elm => {
        const placesCoords = { lat: elm.locate.cordinates[0], lng: elm.locate.cordinates[1] }
        console.log(placesCoords)


        new google.maps.Marker({
            map: myMap,
            position: placesCoords,
            title: elm.name
        })

    })
}