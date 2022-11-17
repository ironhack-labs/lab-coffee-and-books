document.addEventListener('DOMContentLoaded', () => {
    function startMap() {

        const Madrid = {
            lat: 40.415367,
            lng: -3.703390
        };

        const createMarker = (position, title, map) => {
            new google.maps.Marker({
                position,
                map,
                title,
            });
        };

        const createMap = (center) => {
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 5,
                center: center,
            });
            return map;
        };

        const geolocationAndCenterMap = (map) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        const center = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        };
                        console.log('center: ', center);
                        map.setCenter(center);
                    },
                    function () {
                        console.log('Error in the geolocation service.');
                    }
                );
            } else {
                console.log('Browser does not support geolocation.');
            }
        };

        const createRoute = (directionRequest, map) => {
            const directionsService = new google.maps.DirectionsService();
            const directionsDisplay = new google.maps.DirectionsRenderer();
            directionsService.route(directionRequest, function (response, status) {
                if (status === 'OK') {
                    // everything is ok
                    directionsDisplay.setDirections(response);
                    console.log(response);
                } else {
                    // something went wrong
                    window.alert('Directions request failed due to ' + status);
                }
            });
            directionsDisplay.setMap(map);
        };

        const markersPlaces = (places, map) => {
            places.forEach((place) => {
                const location = {
                    lat: place.location.coordinates[0],
                    lng: place.location.coordinates[1],
                };
                createMarker(location, place.name, map);
            });
        };

        const getPlaces = (map) => {
            axios
                .get('/places/map')
                .then((response) => {
                    const places = response.data;
                    const placesCoor = {
                        lat: places[0].location.coordinates[0],
                        lng: places[0].location.coordinates[1],
                    };

                    const map = createMap(placesCoor);
                    markersPlaces(places, map);

                })
                .catch((err) => {
                    console.error(err);
                });
        };

        getPlaces();
    }

    startMap();
});  