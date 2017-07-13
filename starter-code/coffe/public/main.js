// main.js
function startMap() {
  var ironhackBCN = {
    lat: 41.3977381,
    lng: 2.190471916
  }
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 15,
      center: ironhackBCN
    }
  )
  window.map = map
}

startMap()


document.getElementById('form').addEventListener('submit', changeDirection)

function changeDirection(event) {
  event.preventDefault()
  alert('hola')

  const geocoder = new google.maps.Geocoder()


  function geocodeAddress(geocoder, resultsMap) {
    let address = document.getElementById('address').value

    geocoder.geocode({
      'address': address
    }, function(results, status) {

      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        let marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    })
  }
  geocodeAddress(geocoder, map)

}
