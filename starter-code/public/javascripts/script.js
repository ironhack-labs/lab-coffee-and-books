
const map = new google.maps.Map(
  document.getElementById('map'), {
    zoom: 14,
    center: {
      lat: 40.4169473,
      lng: -3.7035285
    }
  }
);

loadData(map);

// geolocateMe()
//   .then(center => map.setCenter(center))
//   .catch(e => console.log(e));
