let map;

window.onload = () => {
    const ironhack = {
        lat: 40.4366610,
        lng: - 3.7121337
    };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: ironhack
    });

    
    getplaces()
};

function placePlaces(places) {
    console.log(places)
    places.forEach(place => {
        const center = {
            lat: place.location.coordinates[0],
            lng: place.location.coordinates[1]
        }
        new google.maps.Marker({
            position: center,
            map: map,
            title: place.name
        })
        map.setCenter({
            lat: place.location.coordinates[0],
            lng: place.location.coordinates[1]
        })
    })
}