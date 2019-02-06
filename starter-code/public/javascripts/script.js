//DOM Setup
const mapContainer = document.getElementById("map")
const addField = document.getElementById("add-field")
addField.style.display = "none"
addField.onsubmit = () => {
  addField.reset();
  addField.style.display = "none"
}
const addButton = document.getElementById("addbutton")
addbutton.onclick = () => addField.style.display = "block"
const updateField = document.getElementById("update-field")
updateField.style.display = "none"
updateField.onsubmit = () => { 
  updateField.reset();
  updateField.style.display = "none"
}  
const updateButtons = document.getElementsByClassName("update-btn")
for (let i = 0; i < updateButtons.length; i++) {
  updateButtons[i].onclick = updateField.style.display = "block"
}

axios.get("/api/places")
.then(data => {
  let coordinates = []
  let places = data.data.places 
  for (obj of places) {
    coordinates.push({lng: obj.coordinates[1], lat: obj.coordinates[0]})
  }
  console.log(coordinates)
  mapboxgl.accessToken = 'pk.eyJ1IjoibmhpcnNjaGZlbGQiLCJhIjoiY2pyc3llbm95MXZkNDQ0cHN0eDJjczJkayJ9.BzslbtfSPeqscVL7foBxnw';

  const mapBoxAPI = axios.create({
    baseURL: 'https://api.mapbox.com'
  });
  
  function startMap() {
    const map = new mapboxgl.Map({
      container: mapContainer,
      center: coordinates[0],
      zoom: 8,
      style: 'mapbox://styles/mapbox/streets-v11'
    });
    for (let i = 0; i<coordinates.length; i++) {
      new mapboxgl.Marker()
      .setLngLat([coordinates[i].lng, coordinates[i].lat])
      .addTo(map)
    }
  }
  startMap();
})