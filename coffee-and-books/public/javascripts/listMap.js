document.addEventListener('DOMContentLoaded', () => {

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
  });
  geolocalize().then(center => {
    map.setCenter(center);

    places.forEach(place => {
      //if place.
      marker = new google.maps.Marker({
        position: {
          lat:place.location.coordinates[0],
          lng:place.location.coordinates[1]
        },
        map: map,
        title: place.name+'\n'+ place.kind,
        label: {
          text: place.kind,
          fontSize: '20px',
          fontWeight: 'bolder'
        },
        color: 'blue',
        MarkerShape: {
          type: 'circle'
        }
      });
      console.log("mARKER: ", marker);
    })

  });


}, false);