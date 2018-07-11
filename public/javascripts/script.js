document.addEventListener('DOMContentLoaded', () => {

  const barrio = {
    lat: 40.403053,
    lng: -3.636132
  };
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 15,
      center: barrio
    }
  );

  window.places.forEach( places => {
    new google.maps.Marker({
      position: {
        lat: places.location.coordinates[0],
        lng: places.location.coordinates[1]
      },
      map: map,
      title: places.name
    });
  })



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
        reject('Browser does not support geolocation.');

      }
    })
  }


  geolocate().then(position => {
     const myMarker = new google.maps.Marker({
       position,
       map: map,
       title: "I'm here"
     });
     map.setCenter(position);
 })


 



}, false);