document.addEventListener(
    'DOMContentLoaded',
    () => {
        function createMarker(center, map, title) {
            new google.maps.Marker({
                position: center,
                map,
                title,
            });
        }


        function direction(map, { origin, destination}) {
            const directionsService = new google.maps.DirectionsService();
            const directionsDisplay = new google.maps.DirectionsRenderer();

            const directionRequest = {
                origin,
                destination
            };

            directionsService.route(directionRequest, function (response, status) {
                if (status === 'OK') {
                    console.log(response);
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });

            directionsDisplay.setMap(map);
        }

        function geocode(map) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        const center = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        };
                        createMarker(center, map, 'Mi posición!!');
                    },
                    function () {
                        console.log('Error in the geolocation service.');
                    }
                );
            } else {
                console.log('Browser does not support geolocation.');
            }
        }


        function placeRestaurants(restaurants, map) {
            for (let restaurant of restaurants) {
                const center = {
                    lat: restaurant.location.coordinates[1],
                    lng: restaurant.location.coordinates[0],
                };
                createMarker(center, map, restaurant.name);
            }
        }

        function getRestaurants(map) {
            axios
                .get('/restaurants/api')
                .then((response) => {
                    placeRestaurants(response.data, map);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        function startMap() {
            let ironhack = {
                lat: 41.3977381,
                lng: 2.190471916,
            };

            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 7,
                center: ironhack,
            });
            direction(map, {
                origin: ironhack,
                destination: 'Madrid, ES'
            });
            geocode(map);
            getRestaurants(map);
        }

        startMap();
    },
    false
);
