document.addEventListener('DOMContentLoaded', () => {


const puertaDelSol = {
  lat: 40.4169019, 
  lng:-3.7056721
}

const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: puertaDelSol
})


startMap = () => {

  map.addListener("click", function(e) {
    document.getElementById("latitude").value = e.latLng.lat();
    document.getElementById("longitude").value = e.latLng.lng();
  })
}

  placeLibraryCoffee = (places) => {

    const markers = []

    places.forEach(manolito => {
      const center = {
        lat: manolito.location.coordinates[1],
        lng: manolito.location.coordinates[0]
      }

      const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: manolito.name
      })
      markers.push(marker)
    })
  }

  startMap()
  placeLibraryCoffee(window.result)

}, false);



