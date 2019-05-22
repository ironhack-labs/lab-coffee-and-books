window.onload = () => {

    var styledMapType = new google.maps.StyledMapType(
        [
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#e0efef"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "hue": "#1900ff"
                    },
                    {
                        "color": "#c0e8e8"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": 700
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#7dcdcd"
                    }
                ]
            }
        ],
        {name: 'Styled Map'}
    )

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {
            lat: 41.008240,
            lng: 28.978359
        },
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
    })

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType)
    map.setMapTypeId('styled_map')
    

    let center = {
        lat: undefined,
        lng: undefined
    }

    getPlaces(map)
}




function getPlaces(map) {
    axios.get("/api")
        .then(response => placePlaces(response.data.places, map))
        .catch(error => console.log(error))
}


const placePlaces = (Place, myMap) => {

    Place.forEach(pla => {

        const location = {
            lat: pla.location.coordinates[1],
            lng: pla.location.coordinates[0]
        }

        new google.maps.Marker({
            position: location,
            map: myMap,
            title: pla.name
        })
    })
}