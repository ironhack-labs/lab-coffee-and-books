const loadData = (map) => {
  places.forEach(p => addMarker(p.name, {
    lat: p.location.coordinates[0],
    lng: p.location.coordinates[1]
  }, map))

}