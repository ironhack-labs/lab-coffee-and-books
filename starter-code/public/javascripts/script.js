/*jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', () => {

    console.log(window)

    const ironhackMad = {
        lat: 40.392757,
        lng: -3.698256
    }

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: ironhackMad
    })

    startMap = () => {

        map.addListener("click", function(e) {
            document.getElementById("latitude").value = e.latLng.lat();
            document.getElementById("longitude").value = e.latLng.lng();
        });

        // const myMarker = new google.maps.Marker({
        //     position: ironhackMad,
        //     map: map,
        //     title: 'IronHack'
        // })
    }

    placePlaces = (places) => {

        const markers = []

        places.forEach(place => {
            const center = {
                lat: place.location.coordinates[1],
                lng: place.location.coordinates[0]
            }

            const marker = new google.maps.Marker({
                position: center,
                map: map,
                title: place.name
            })
            markers.push(marker)
        })
    }
    startMap()
    placePlaces(window.result)

}, false)