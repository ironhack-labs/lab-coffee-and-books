document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

  const myPlace = {
    lat: 40.4119851,
    lng: -3.7079206
  }

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myPlace
  })


  initMap = () => {

    map.addListener("click", function (x) {
      document.getElementById("lat").value = x.pos.lat();
      document.getElementById("long").value = x.pos.lng();
    })
  }

  placeSpot = (places) => {

    const markers = []

    places.forEach(spot => {
      const center = {
        lat: spot.location.coordinates[1],
        lng: spot.location.coordinates[0]
      }

      const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: spot.name
      })
      markers.push(marker)
    })
  }

  initMap()
  placeSpot(window.result)

}, false);
