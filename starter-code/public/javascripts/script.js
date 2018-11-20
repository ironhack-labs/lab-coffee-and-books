window.onload = function () {
  startMap();
}

const mapDOMElement = document.getElementById('theMap')
window.chosenLocation = null
function startMap() {
  map = new google.maps.Map(
    mapDOMElement, {
      zoom: 2,
      center: { lat: 0, lng: 0 }
    }
  );

  axios.get('/getmarkers')
    .then((markers) => {
      markers.data.places.forEach(marker => marker.location && new google.maps.Marker({
        position: new google.maps.LatLng({
          lat: (marker.location.lat),
          lng: (marker.location.lng),
        }),
        map,
        title: `Name: ${marker.name} Type: ${marker.type}`
      }));
    })
    .catch(err => console.log(err));

  //marker creation and instantiation in the ajax requested location
  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(),
    map: map,
    title: "Fuenla, ciudad sin ley"
  });
  //sets and listener so we can move the marker to the chosen coordinates
  map.addListener("click", function (e) {
    window.chosenLocation = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    }
    marker.setPosition(chosenLocation);
    addToForm(chosenLocation);
  })
}

function addToForm(location) {
  document.getElementById('lat').value = location.lat;
  document.getElementById('lng').value = location.lng;
}

