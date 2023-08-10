const initialCoords = { lat: 40.39271745365555, lng: -3.6985583199693197 }
let myMap

function init() {
  renderMap()
  getPlacesData()
}

function renderMap() {
  myMap = new google.maps.Map(document.querySelector('#myMap'), {
    zoom: 15,
    center: initialCoords,
    mapTypeControl: false,
    styles: [
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [
          {
            saturation: 36
          },
          {
            color: '#000000'
          },
          {
            lightness: 40
          }
        ]
      },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            visibility: 'on'
          },
          {
            color: '#000000'
          },
          {
            lightness: 16
          }
        ]
      },
      {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 17
          },
          {
            weight: 1.2
          }
        ]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'administrative.neighborhood',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'simplified'
          }
        ]
      },
      {
        featureType: 'administrative.neighborhood',
        elementType: 'labels.text.fill',
        stylers: [
          {
            lightness: '17'
          }
        ]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: 'landscape',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'landscape.natural',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 21
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'simplified'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'on'
          },
          {
            color: '#ff0000'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          {
            lightness: 17
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 29
          },
          {
            weight: 0.2
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [
          {
            invert_lightness: true
          },
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#3b3b3b'
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 18
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#ff0000'
          },
          {
            lightness: '39'
          },
          {
            gamma: '0.43'
          },
          {
            saturation: '-47'
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 16
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#555555'
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 19
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 17
          }
        ]
      }
    ]
  })
}

function getPlacesData() {
  axios
    .get('/api/places')
    .then(response => printMarkers(response.data))
    .catch(err => console.log(err))
}

function printMarkers(places) {
  places.forEach(elm => {
    const position = {
      lat: elm.location.coordinates[1],
      lng: elm.location.coordinates[0]
    }

    new google.maps.Marker({
      position,
      map: myMap,
      title: elm.name
    })
  })
}
