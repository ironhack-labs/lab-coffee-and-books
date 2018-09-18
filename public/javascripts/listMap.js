document.addEventListener('DOMContentLoaded', () => {

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
  });
  geolocalize().then(center => {
    map.setCenter(center);

    places.forEach(place => {
      console.log(place)
      let label;
      if (place.kind === "coffee") {
      label = "C";
        } else {label = "B"};
  
      new google.maps.Marker({
        position: {
          lat:place.location.coordinates[0],
          lng:place.location.coordinates[1]
        },
        map: map,
        title: place.name,
        label
      });
    })
  });

}, false);