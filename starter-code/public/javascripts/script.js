document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('IronGenerator JS imported successfully!')
  },
  false
)
const storeMap = document.getElementById('store-map')

function getPlaces() {
  axios.get("/api")
  .then((response) => {
    console.log("Respuesta server: ", response)
  }).catch((err) => {
    console.log(err)
  });
}

function startMap() {
  const lasSetas = {
    lat: 37.3931548,
    lng: -5.9940192,
  }
  const map = new google.maps.Map(storeMap, {
    zoom: 17,
    center: lasSetas,
  })
  getPlaces()
}

startMap()

