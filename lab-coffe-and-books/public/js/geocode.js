let geocoder;
const key = "AIzaSyAMzL3s__ul0jf_RCKdh2eRUwJJsQ5ojTo";
const url = "https://maps.googleapis.com/maps/api/geocode/json?";

let map;
let currentMaker;
const coordsSOL = {
    lat: 40.4169,
    lng: -3.7035
}


function initialize() {
    geocoder = new google.maps.Geocoder();
    renderMap();
    currentMaker = new google.maps.Marker({ position: { lat: 0, lng: 0 }, map })
}

function renderMap() {

    map = new google.maps.Map(
        document.querySelector('#smallMap'),
        {
            zoom: 12,
            center: coordsSOL,
        }
    )
}

document.getElementById('direction').onkeyup = event => {
    //google.maps.marker.setMap(null);
    const serch = event.currentTarget.value;
    const request = url + "address=" + serch + "&key=" + key;
    fetch(request)
        .then(response => response.json())
        .then(response => {
            const { lat, lng } = response.results[0].geometry.location;
            const latBox = document.getElementById('lat');
            const lonBox = document.getElementById('lon');
            latBox.value = lat;
            lonBox.value = lng;
            map.setCenter({ lat, lng });
            currentMaker.setMap(null);
            currentMaker = new google.maps.Marker({ position: { lat, lng }, map });



        })
        .catch(err => console.log(err));

}
//https://maps.googleapis.com/maps/api/geocode/json?address=puerta%del%sol%madrid&key=AIzaSyAMzL3s__ul0jf_RCKdh2eRUwJJsQ5ojTo
