document.addEventListener('DOMContentLoaded', () => {

  
  const ironhackMad = {
    lat: 40.392757,
    lng: -3.698256
  }

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center:  ironhackMad
  })

  startMap = () => {

    map.addListener("click", function(e) {
      document.getElementById("latitude").value = e.latLng.lat();
      document.getElementById("longitude").value = e.latLng.lng();
    });

  }
  
  drawPlaces = (places) => {

    const markers = []

    places.forEach(place => {
      const center = {
        lat: place.location.coordinates[1],
        lng: place.location.coordinates[0]
      }

      const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: place.name
      })
      markers.push(marker)
    })
  }

  startMap()
  drawPlaces(window.result)



  console.log('IronGenerator JS imported successfully!');

}, false);
