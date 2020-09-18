const placesApi = new PlacesApiHandler()

const farmacia = { lat: 43.305242, lng: -2.004977 }

let map;
let marker;

function initMap() {

    placesApi
        .getAllPlaces()
        .then(allPlaces => {

            map = new google.maps.Map(document.getElementById("map"), {
                center: farmacia,
                zoom: 1
            });

            allPlaces.data.forEach(elm => {

                console.log(elm.location)

                marker = new google.maps.Marker({ position: { lat: Number(elm.location.latitude), lng: Number(elm.location.longitude) }, map: map })
            });

        })
        .catch(err => console.log('Hubo un error!', err))

}