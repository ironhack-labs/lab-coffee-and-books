let geocoder;
const key = "AIzaSyAMzL3s__ul0jf_RCKdh2eRUwJJsQ5ojTo";
const url = "https://maps.googleapis.com/maps/api/geocode/json?";
function initialize() {
    geocoder = new google.maps.Geocoder();
}


document.getElementById('direction').onkeyup = event => {

    console.log(event.currentTarget.value);
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

        })
        .catch(err => console.log(err));

}
//https://maps.googleapis.com/maps/api/geocode/json?address=puerta%del%sol%madrid&key=AIzaSyAMzL3s__ul0jf_RCKdh2eRUwJJsQ5ojTo
