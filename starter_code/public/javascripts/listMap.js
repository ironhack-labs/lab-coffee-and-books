document.addEventListener('DOMContentLoaded', () => {

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
  });
  geolocalize().then(center => {
    map.setCenter(center);

    goodPlaces.forEach(places => {
      new google.maps.Marker({
        position: {
          lat:places.location.coordinates[0],
          lng:places.location.coordinates[1]
        },
        map: map,
        title: rest.name
      });
    })

  });


}, false);