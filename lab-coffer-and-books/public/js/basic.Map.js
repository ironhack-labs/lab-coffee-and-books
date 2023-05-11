const estanque = { lat: 40.41734821915996, lng: -3.683887777300932 }

function initMap() {

    const myMap = new google.maps.Map(
        document.querySelector('#map'),
        {
            zoom: 15,
            center: estanque,
        }
    )

    new google.maps.Marker({
        map: myMap,
        position: estanque,
        title: 'Estanque del Retido'
    })
}

