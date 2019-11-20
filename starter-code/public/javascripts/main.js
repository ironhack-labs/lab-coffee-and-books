function startMap() {
    const madridSol = {
        lat: 40.4169473,
        lng: -3.7056721,
    };
    const map = new google.maps.Map(
        document.getElementById('map'),
        {
            zoom: 5,
            center: madridSol
        }
    );

    axios.get("http://localhost:3000/map").then(places => {
        places.data.forEach(place => {
            let myLatLng = { lat: place.location.coordinates[1], lng: place.location.coordinates[0] };
            new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: place.name,
            });
        });
    });
}

startMap();