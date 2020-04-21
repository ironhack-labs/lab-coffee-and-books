document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('IronGenerator JS imported successfully!')
  },
  false
)
const storeMap = document.getElementById('store-map')

let defaultCenter
let googleMap

let markers = []
let marker

function pinMarkers(places, resultMap) {
  const geocoder = new google.maps.Geocoder()
  places.forEach((place) => {
    geocoder.geocode({ address: place.address }, (results, status) => {
      if (status === 'OK') {
        resultMap.setCenter(results[0].geometry.location)
        marker = new google.maps.Marker({
          map: resultMap,
          position: results[0].geometry.location,
          title: place.name,
        })
        markers.push(marker)
      } else {
        console.log("Geocode wasn't successful: ", status)
      }
    })
  })
}

function getPlaces() {
  axios
    .get('/api')
    .then((response) => {
      pinMarkers(response.data.places, googleMap)
    })
    .catch((err) => {
      console.log(err)
    })
}

function startMap() {
  defaultCenter = {
    lat: 37.3931548,
    lng: -5.9940192,
  }
  googleMap = new google.maps.Map(storeMap, {
    zoom: 17,
    center: defaultCenter,
  })
  getPlaces()
}
