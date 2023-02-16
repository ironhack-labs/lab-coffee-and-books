const initialCoordinates = { lat: 40.43828699732861, lng: -3.6912618744622256 }
let myMap

axios
    .get('/api/places')
    .then(({ data }) => setMarkers(data))
    .catch(err => console.log(err))


function initMap() {

    myMap = new google.maps.Map(
        document.querySelector('#map'),
        {
            zoom: 12,
            center: initialCoordinates,
        }
    )
}


function setMarkers(coffees) {

    coffees.forEach(elm => {
        const [lat, lng] = elm.location.coordinates
        console.log(lat, lng, elm.name)

        new google.maps.Marker({
            map: myMap,
            position: { lat, lng },
            title: elm.name
        })
    })
}