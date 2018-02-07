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
    // const userLocation = getBrowserLocation();
    // console.log(userLocation);
    var map = new google.maps.Map(
      mapElement,
      {
        zoom: 15,
        center: center
      }
    );
    // add marker
    var myMarker = new google.maps.Marker({
      position: center,
      map: map,
      title: "I'm here"
    });
  }

  getBrowserLocation();
  // .then(startMap)
  // .catch((err) => {
  //   console.error(err);
  // });
}

window.onload = main;
