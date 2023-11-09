const Coords = { lat: 40.407248013600544, lng: -3.7295574513849807 }

function renderMap() {

    const myMap = new google.maps.Map(
        document.querySelector('#mapp'),
        {
            zoom: 15,
            center: Coords,
        }
    )
    new google.maps.Marker({
        map: myMap,
        position: Coords
    })
}

//no entiendo para que quiero esto