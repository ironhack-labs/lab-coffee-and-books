
document.addEventListener('DOMContentLoaded', () => {

console.log(window)

const ironhackMad = {
    lat: 40.392757,
    lng: -3.698256
  }

const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center:  ironhackMad
})

  startMap = () => {
//div map in index adds latitudes and longitudes when we click in our map 
    map.addListener("click", function(e) {
      document.getElementById("latitude").value = e.latLng.lat();
      document.getElementById("longitude").value = e.latLng.lng();
    });

  }

drawPlaces = (places) => {
  const markers = []

  places.forEach(lugar => {
    
    const center = {
      lat:  lugar.location.coordinates[1],
      lng: lugar.location.coordinates[0]
    }
    const marker = new google.maps.Marker({
      position:center,
      map,
      title: lugar.name
    })
    markers.push(marker)
  });
}

  startMap()
  drawPlaces(window.result)


  document.getElementById("router").onclick = goToMallorca


  console.log('IronGenerator JS imported successfully!');

}, false);