document.addEventListener('DOMContentLoaded', () => {

    console.log('IronGenerator JS imported successfully!');

}, false);

function startMap() {
    const ironhackMEX = {
        lat: 19.4016445,
        lng: -99.1733044
    };

    const markers = [];

    const map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: ironhackMEX
        }
    );

    //place a marker
    const myMarker = new google.maps.Marker({
        position: ironhackMEX,
        map: map,
        title: "I'm here"
    });


}

startMap();