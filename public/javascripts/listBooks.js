
document.addEventListener('DOMContentLoaded', () => {

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
  });
  geolocalize().then(center => {
    map.setCenter(center);

    books.forEach(boo => {
      new google.maps.Marker({
        position: {
          lat:boo.location.coordinates[0],
          lng:boo.location.coordinates[1]
        },
        map: map,
        title: boo.name
      });
    })

  });


}, false);
