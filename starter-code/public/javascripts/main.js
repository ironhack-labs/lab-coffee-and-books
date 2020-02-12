function initMap() {
    // Opciones de mapa
    const mapOptions = {
        center: directions.ironhackMadrid.coords,
        zoom: 15
    }

    // Instancia de mapa
    const myMap = new google.maps.Map(document.querySelector('#myMap'),mapOptions)//

    // Opciones de marcador
    const markerOptions = {
        position: 41.0,
        map: myMap,
        title: directions.ironhackMadrid.title
    }

    // Instancia de marcador
    new google.maps.Marker(markerOptions)
}