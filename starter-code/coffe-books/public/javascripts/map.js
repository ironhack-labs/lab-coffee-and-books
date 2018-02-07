function main () {
  const mapElement = document.getElementById('map');

  function getBrowserLocation () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log('center: ', center);
        startMap(center);
        return center;
      }, function () {
        console.log('Error in the geolocation service.');
      });
    } else {
      console.log('Browser does not support geolocation.');
    }
  }
  function startMap (center) {
    var map = new google.maps.Map(
      mapElement,
      {
        zoom: 15,
        center: center
      }
    );
    // add marker
    let markers = [];
    const allPlaces = getData();
    allPlaces.forEach((place) => {
      let name = place.name;
      // let establishment = place.establishment;
      let position = {
        lat: place.location.coordinates[1],
        lng: place.location.coordinates[0]
      };
      var pin = new google.maps.Marker({ position, map, name });
      markers.push(pin);
    });
  }

  function getData () {
    return axios.get('/api/places')
      .then((response) => response.data)
      .catch((err) => err);
  }

  getBrowserLocation();
}

window.onload = main;
