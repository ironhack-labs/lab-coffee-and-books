



function startMap() {
  const ironhackBCN = {
  	lat: 41.3977381,
  	lng: 2.190471916};
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 5,
      center: ironhackBCN
    }
  );
  

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const user_location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(user_location);

      const myPosition = new google.maps.Marker({
        position: {
          lat: user_location.lat,
          lng: user_location.lng
        },
        map: map,
        title: "You are here."
      });

    }, function () {
      console.log('Error in the geolocation service.');
    });
  } else {
    console.log('Browser does not support geolocation.');
  }

  axios.get("http://localhost:3000/map")
  .then(response => {
    let places = response.data
    places.forEach( place => {
      new google.maps.Marker({
        position: {
          lat: place.location.coordinates[0],
          lng: place.location.coordinates[1]  
        },
        map: map,
        title: place.name,
      });
    })
  })
  .catch(error => {
    console.log(error);
  })

}

startMap();
