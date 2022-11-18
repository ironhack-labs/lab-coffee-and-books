function startMap() {
    const malaga = {
        lat: 36.7201600,
        lng: -4.4203400,
    };

    const map = new google.maps.Map(
        document.getElementById('map'),
        {
            zoom: 5,
            center: malaga
        }
    );

}

startMap();