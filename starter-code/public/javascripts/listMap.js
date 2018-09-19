document.addEventListener(
  "DOMContentLoaded",
  () => {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10
    });
    geolocalize().then(center => {
      map.setCenter(center);
      place.forEach(rest => {
        new google.maps.Marker({
          position: {
            lat: rest.location.coordinates[0],
            lng: rest.location.coordinates[1]
          },
          map: map,
          title: rest.name
        });
      });
    });
    map.fitBounds(Marker);
  },
  false
);
