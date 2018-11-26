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



//Update position each second after btn click

document.querySelector(".findMe").onclick = (e) => {
  setInterval(()=>{
    geolocateMe()
    .then(center => {
      console.log('Position updated');
      map.setCenter(center);
      let marker;
      if(marker) marker.setMap(null);
      marker = new google.maps.Marker({position: center, map});
    })
    .catch(e => console.log(e));
  }, 1000);
};
