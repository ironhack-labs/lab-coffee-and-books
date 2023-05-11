const melbourneCoords = { lat: - 37.81457368325429, lng: 144.96378859393087 }

function initMap() {

    const myMap = new google.maps.Map(
        document.querySelector('#map'),
        {
            zoom: 12,
            center: melbourneCoords,
        }
    )

    new google.maps.Marker({
        map: myMap,
        position: melbourneCoords,
        title: 'Melbourne Coffee & Books'
    })
}