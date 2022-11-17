const sierra = {
    coords: {
        lat: 40.728819813779744, lng: - 4.016861227941024
    },
    title: 'Navacerrada'
}

function init() {

    new google.maps.Map(
        document.querySelector('#map'),
        {
            zoom: 13,
            center: sierra.coords
        }
    )
}