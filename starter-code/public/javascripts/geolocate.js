const geolocateMe = () => {
  return new Promise( (resolve, reject) => {
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
        headers: {"Content-Type": "application/json"}
      }).then(res => {
        console.log('------------------');
        console.log(res);
        res.json();
      })
      .catch(err => console.error('Error:', err));
      map.setCenter(location);
      let marker;
      if(marker) marker.setMap(null);
      marker = new google.maps.Marker({position: location, map});
    })
    .catch(e => console.log(e));
  //}, 1000);
};
