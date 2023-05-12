const ironhackCoords = { lat: 40.392521370648154, lng: - 3.6989879718518366 }

function initMap() {

  const myMap = new google.maps.Map(
    document.querySelector('#map'),
    {
      zoom: 15,
      center: ironhackCoords,
    }
  )

  new google.maps.Marker({
    map: myMap,
    position: ironhackCoords,
    title: 'Ironhack Matadero'
  })
}