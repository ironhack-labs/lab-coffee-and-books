const ironhack = {
  coords: { lat: 40.392859634936286, lng: - 3.6989879718518366 },
  title: 'Ironhack Madrid'
}

/* function init() {
    renderMap()
} */



function init() {

  new google.maps.Map(
    document.querySelector('#map'),
    {
      zoom: 13,
      center: ironhack.coords
    }
  )
}
