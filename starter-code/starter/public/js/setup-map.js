function initMap() {
  const { Map, Marker } = google.maps

  const map = new Map(document.getElementById('myMap'), {
    zoom: 10,
    center: { lat: 40.392499, lng: -3.698214 },
    styles: mapStyles.aubergine,
  })

  new Marker({
    position: { lat: 40.392499, lng: -3.698214 },
    map,
  })
}
