$(document).ready(function() {
    const sol = {
        lat: 48872595,
        lng: 2341767
    }
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: sol
    })

    let markers = []

    myPlaces.forEach(function(place) {
        let title = place.place.nameplace
        let position = {
            lat: place.location.coordinates[1],
            lng: place.location.coordinates[0]
        }

        var pin = new google.maps.Marker({ position, map, title})
        markers.push(pin)
    })
})