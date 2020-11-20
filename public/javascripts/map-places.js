function initMap() {

 // Crear un mapa ( Creo un new map de Google Map con Donde y Como(los dos argumentos))
    const mapInstance = new google.maps.Map(
        document.querySelector('#map'), {
            center: directions.ironhackBCN.coords,
            zoom: 15,
            styles: mapStyles.picaporte


    })

 // Crear un marker (Debajo del mapa(no puede estar huerfano) un solo argumento y e instancio el mapa)
    new google.maps.Marker({
        map: mapInstance,
        position: directions.ironhackBCN.coords,
        title: directions.ironhackBCN.title
    })
}