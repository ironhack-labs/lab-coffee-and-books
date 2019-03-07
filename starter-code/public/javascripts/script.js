document.addEventListener('DOMContentLoaded', () => {

  const coffeeShop = {
    lat: 40.420651,
    lng: -3.705942,
  }
  
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center:  coffeeShop
  })

  startMap = () => {

  map.addListener("click", function(e) {
    document.getElementById("latitude").value = e.latLng.lat();
    document.getElementById("longitude").value = e.latLng.lng();
  });

  
  const myMarker = new google.maps.Marker({
    position: coffeeShop,
    map: map,
    title: 'Cafeteria'
  })
}
    placesCoffeesBooks = (places) => {

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
  placesCoffeesBooks(window.result)
  
}, false);

