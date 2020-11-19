function initMap() {
    const mapInstance = new google.maps.Map(document.querySelector('#placesMap'),
        {
            center: directions.laCentral.coords,
            zoom: 12,
        }
    )
  
     new google.maps.Marker({
        map: mapInstance,
        position: directions.tiposInfames.coords,
        title: directions.tiposInfames.title
    })
}