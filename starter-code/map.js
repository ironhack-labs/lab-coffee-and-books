console.log("ESTO JALA")
function startMap() {
    console.log("ESTO tambien")
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 19.3979067,
            lng: -99.171706
        },
        zoom: 20
    });
    navigator.geolocation.getCurrentPosition(function (position) {
        const center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        const myMarker = new google.maps.Marker({
            position: center,
            map: map,
            title: "I'm here"
        });
    })
    var input = document.querySelector('#geo')
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);
    autocomplete.addListener('place_changed', function () {
        console.log(autocomplete.getPlace())
        var lat = autocomplete.getPlace().geometry.location.lat()
        var lng = autocomplete.getPlace().geometry.location.lng()
        map.setCenter({
            lat: lat,
            lng: lng
        })
        document.querySelector('#lat').value = lat
        document.querySelector('#lng').value = lng
    })
}
(startMap())