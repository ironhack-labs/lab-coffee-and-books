const singleMarker = (title, position, map, color) => {
  let url = "http://maps.google.com/mapfiles/ms/icons/";
  url += color + "-dot.png";
  let marker = new google.maps.Marker({
    title,
    position,
    map,
    icon: {
      url
    }
  });
  return marker;
};

const addMarker = (title, description, position, map, color) => {
  let marker = singleMarker(title, position, map, color);
  addWindow(title, description, map, marker);
  return marker;
};

const addWindow = (title, description, map, marker) => {
  let content = `<h1>${title}</h1><p>${description}</p>`;
  let infowindow = new google.maps.InfoWindow({content, maxWidth: 200});
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  return infowindow;
};

const removeMarkers = (markers) => {
  markers.forEach(m => {
    m.setMap(null);
  });
};
