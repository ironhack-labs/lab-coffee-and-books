const loadData = (map) => {
  places.forEach(p => {
    let color = p.type === "coffee shop" ? 'red' : 'blue';
    let marker = addMarker(p.name, {lat: p.location.coordinates[0], lng: p.location.coordinates[1]}, map, color);
    let content = `<h1>${p.name}</h1><p>${p.description}</p>`;
    let infowindow = new google.maps.InfoWindow({content, maxWidth: 200});
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
})
}
