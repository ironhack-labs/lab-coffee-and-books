
document.addEventListener('DOMContentLoaded', () => {

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
  });
  geolocalize().then(center => {
    map.setCenter(center);

    cofees.forEach(cof => {
      new google.maps.Marker({
        position: {
          lat:cof.location.coordinates[0],
          lng:cof.location.coordinates[1]
        },
        map: map,
        title: cof.name
      });
    })

  });


}, false);
