const markers = [];
const loadData = (map) => {
  places.forEach(p => {
    let color = p.type === "coffee shop" ? 'red' : 'blue';
    let markerPlace = addMarker(p.name, p.description, {lat: p.location.coordinates[0], lng: p.location.coordinates[1]}, map, color);
    markers.push(markerPlace);
  })
};
