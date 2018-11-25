
const map = new google.maps.Map(
  document.getElementById('map'), {
    zoom: 14,
    center: {
      lat: 40.4169473,
      lng: -3.7035285
    }
  }
);

// geolocateMe()
//   .then(center => map.setCenter(center))
//   .catch(e => console.log(e));


const addMarker = (title, description, position, map, color) => {
  let url = "http://maps.google.com/mapfiles/ms/icons/";
  url += color + "-dot.png";
  let marker = new google.maps.Marker({
    position,
    map,
    title,
    icon: {
      url
    }
  });
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


loadData(map);
