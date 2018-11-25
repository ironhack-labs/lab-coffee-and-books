const loadData = (map) => {
  places.forEach(p => {
    let color = p.type === "coffee shop" ? 'red' : 'blue';
    addMarker(p.name, p.description, {lat: p.location.coordinates[0], lng: p.location.coordinates[1]}, map, color);
  })
}
