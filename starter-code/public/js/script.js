// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("starter-code JS imported successfully!");
});











const ironhack = {
  coords: { lat: 40.392859634936286, lng: - 3.6989879718518366 },
  title: 'Ironhack Madrid'
}

function initMap() {

  const myMap = new google.maps.Map(
    document.querySelector('#map'),
    {
      zoom: 13,
      center: ironhack.coords,
      styles: mapStyles.retro
    }
  )

  new google.maps.Marker({
    map: myMap,
    position: ironhack.coords,
    title: ironhack.title
  })

}