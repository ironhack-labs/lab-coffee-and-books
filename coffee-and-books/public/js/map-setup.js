const ironhackBCN = {
    lat: 41.3977381,
    lng: 2.190471916
}

function renderMap() {

    const map = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 14,
            center: ironhackBCN,
            styles: mapStyles.retro
        }
    )

    new google.maps.Marker({
        map,
        position: ironhackBCN,
        title: 'Ironhack Barcelona'
    })

}