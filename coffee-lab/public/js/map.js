document.addEventListener(
    'DOMContentLoaded',
    () => {

        function startMap() {
            let ironhack = {
                lat: 40.392456,
                lng: -3.700629,
            };

            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 3,
                center: ironhack,
            })
        }
        startMap()
    },
    false
);