const ironhackCoords = { lat: 40.40894241961571, lng: -3.717356717093759 }

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