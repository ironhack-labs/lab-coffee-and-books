window.onload = () => {

  const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: {
          lat: 40.71453186201801,
          lng: -73.9982480380371
      },
      styles: [
          { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
          {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#d59563' }]
          },
          {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#d59563' }]
          },
          {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{ color: '#263c3f' }]
          },
          {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#6b9a76' }]
          },
          {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ color: '#38414e' }]
          },
          {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#212a37' }]
          },
          {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#9ca5b3' }]
          },
          {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{ color: '#746855' }]
          },
          {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#1f2835' }]
          },
          {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#f3d19c' }]
          },
          {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{ color: '#2f3948' }]
          },
          {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#d59563' }]
          },
          {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#17263c' }]
          },
          {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#515c6d' }]
          },
          {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{ color: '#17263c' }]
          }
      ]
  })

  let center = {
      lat: undefined,
      lng: undefined
  }

  getPlaces(map)
}

function getPlaces(map) {
  axios.get("/api")
      .then(response => place(response.data.all, map)) // se traer el valor de all de routes.
      .catch(error => console.log(error))
}

const place = (sites, myMap) => {

  sites.forEach(place => {

      const location = {
          lat: place.location.coordinates[1],
          lng: place.location.coordinates[0]
      }

      new google.maps.Marker({
          position: location,
          map: myMap,
          title: place.name
      })
  })
}