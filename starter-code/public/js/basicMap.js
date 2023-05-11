const ironhackCoords = { lat: 40.392521370648154, lng: - 3.6989879718518366 }

function initMap() {

  const myMap2 = new google.maps.Map(
    document.querySelector('#map2'),
    {
      zoom: 15,
      center: ironhackCoords,
    }
  )

  new google.maps.Marker({
    map: myMap2,
    position: ironhackCoords,
    title: 'Ironhack Matadero'
  })
}