document.addEventListener('DOMContentLoaded', () => {
    function startMap() {

        const malaga = {
            lat: 36.7201600,
            lng: -4.4203400,
        };

        const createMap = (center) => {
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 5,
                center: center,
            });
            return map;
        }

        const createMarker = (position, name, map) => {
            new google.maps.Marker({
                position,
                map,
                name
            })
        }

        const createRoute = (directionRequest, map) => {
            const directionsService = new google.maps.DirectionsService();
            const directionsDisplay = new google.maps.DirectionsRenderer();
            directionsService.route(directionRequest, function (response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                    console.log(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
            directionsDisplay.setMap(map);
        }

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

        const markersPlaces = (places, map) => {
            places.forEach((place) => {
                const location = {
                    lat: place.location.coordinates[1],
                    lng: place.location.coordinates[0],
                };
                createMarker(location, place.name, map);
            });
        };

        const getPlaces = (map) => {
            axios
                .get('/places')
                .then((response) => {
                    const places = response.data;
                    markersPlaces(places, map);
                })
                .catch((err) => {
                    console.error(err);
                });
        };

        const map = createMap(malaga);
        const markers = [
            {
                location: malaga,
                name: 'malaga',
            }
        ];

        getPlaces(map);
        markers.forEach((marker) => {
            createMarker(marker.location, marker.name, map);
        });
        geolocationAndCenterMap(map);
        createRoute(directionRequest, map);

    }

    startMap();

})