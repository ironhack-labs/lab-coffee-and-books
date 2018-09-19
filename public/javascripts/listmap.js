document.addEventListener('DOMContentLoaded', () => {

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
  });
  geolocalize().then(center => {
    map.setCenter(center);

    cafeterias.forEach(caf => {
      new google.maps.Marker({
        position: {
          lat:caf.location.coordinates[0],
          lng:caf.location.coordinates[1]
        },
        map: map,
        title: caf.name
      });
    })

  });


}, false);
