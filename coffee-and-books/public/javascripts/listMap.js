document.addEventListener('DOMContentLoaded', () => {

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
  });
  geolocalize().then(center => {
    map.setCenter(center);

    coffeeAndBooks.forEach(coff => {
      new google.maps.Marker({
        position: {
          lat:coff.location.coordinates[0],
          lng:coff.location.coordinates[1]
        },
        map: map,
        title: coff.name
      });
    })

  });


}, false);