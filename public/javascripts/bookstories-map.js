function initMap() {

    // Crear mapa

    const mapInstance = new google.maps.Map(document.querySelector('#booksMap'),
        {
            center: directions.libreriaMad.coords,
            zoom: 15,
            styles: mapStyles.retro
        }
    )

    new google.maps.Marker({
        map: mapInstance,
        position: directions.libreriaMad.coords,
        title: directions.libreriaMad.title
    })
}