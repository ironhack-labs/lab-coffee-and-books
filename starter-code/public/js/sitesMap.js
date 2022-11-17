let myMap

function init() {
    renderMap()
    // getSites()
}

// function getSites() {

//     axios
//         .get('/api/sites')
//         .then(response => setMarkers(response.data))
//         .catch(err => console.log(err))
// }


// function setMarkers(sites) {

//     sites.forEach(elm => {

//         const lat = elm.location.coordinates[0]
//         const lng = elm.location.coordinates[1]

//         new google.maps.Marker({
//             map: myMap,
//             position: { lat, lng },
//             title: elm.name
//         })
//     })
// }

function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 10,
            center: { lat: 42.550610, lng: - -3.324173 }
        }
    )
}

