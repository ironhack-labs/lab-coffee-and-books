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
            center: { lat: 40.41021719585687, lng: - 3.6964127095024857 },
        }
    )
}

function setMarkers(places) {
    places.forEach(elm => {
        const lat = elm.location.coordinates[0]
        const lng = elm.location.coordinates[1]

        new google.maps.Marker({
            map: myMap,
            position: { lat, lng },
            title: elm.name
        })
    })
}