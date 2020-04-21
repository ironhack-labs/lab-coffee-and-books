document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('IronGenerator JS imported successfully!')
  },
  false
)

const storeMap = document.getElementById('store-map')

function startMap() {
  const lasSetas = {
    lat: 37.3931548,
    lng: -5.9940192,
  }
  const map = new google.maps.Map(storeMap, {
    zoom: 17,
    center: lasSetas,
  })
}

startMap()