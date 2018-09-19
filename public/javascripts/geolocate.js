const geolocate = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const myPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        resolve(myPosition);
      }, ()  => reject('Error in the geolocation service.')); 
    } else {
      reject('Browser does not support geolocation.'); 
    }
  })
}