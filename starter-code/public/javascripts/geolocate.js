const geolocateMe = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      }, () => reject('Error in the geolocation service.'));
    } else {
      reject('Browser does not support geolocation.');
    }
  })
};



document.querySelector(".findMe").onclick = (e) => {
  //Update position each second after btn click
  //setInterval(()=>{
  geolocateMe()
    .then(location => {
      console.log('Position updated');
      console.log(location);
      fetch("/nearPlaces", {
          method: 'POST',
          body: JSON.stringify({location}),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json()).then(nearPlaces => {
          window.places = nearPlaces;
          removeMarkers(markers);
          let meMarker;
          map.setCenter(location);
          if (meMarker) meMarker.setMap(null);
          meMarker = new google.maps.Marker({position: location, map});
          loadData(map);
        })
        .catch(e => console.error('Error:', e));
    })
    .catch(e => console.log(e));
  //}, 1000);
};
