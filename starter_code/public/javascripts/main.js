window.onload = () => {
    const ironhackBCN = {
        lat: 41.38623,
        lng: 2.17498
    };

    const markers = [];

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: ironhackBCN
    });

    let center = {
        lat: undefined,
        lng: undefined
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                center = { lat: position.coords.latitude, lng: position.coords.longitude };
                map.setCenter(center);
                getPlaces();
            },
            () => {
                getPlaces();
                console.log("Error in the geolocation service.");
            }
        );
    } else {
        console.log("Browser does not support geolocation.");
    }

    function deleteMarkers() {
        markers.forEach(function(marker) {
            marker.setMap(null);
            marker = null;
        });
        markers = [];
    }

    function getPlaces() {
        axios
            .get("/api")
            .then(response => {
                placePlaces(response.data.places);
            })
            .catch(error => {
                next(error);
            });
    }

    function placePlaces(places) {
        places.forEach(function(place) {
            const center = {
                lat: place.location.coordinates[1],
                lng: place.location.coordinates[0]
            };
            const pin = new google.maps.Marker({
                position: center,
                map: map,
                title: place.name
            });
            markers.push(pin);
        });
    }
};
