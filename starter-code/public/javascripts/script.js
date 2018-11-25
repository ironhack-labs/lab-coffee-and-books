
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


const addMarker = (title, position, map, color) => {
  let url = "http://maps.google.com/mapfiles/ms/icons/";
  url += color + "-dot.png";
  return new google.maps.Marker({
    position,
    map,
    title,
    icon: {
      url
    }
  });
};


loadData(map);
