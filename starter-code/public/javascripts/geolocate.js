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
