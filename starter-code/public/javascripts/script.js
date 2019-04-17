document.addEventListener('DOMContentLoaded', () => {

  const myCurrentCoords = {
      lat: 41.3977381,
      lng: 2.190471916
  };

  const theMap = new google.maps.Map(
      document.getElementById('map'),
      {
          zoom: 12,
          center: myCurrentCoords
      }
  );

  axios.get('http://localhost:3000/places')
  .then(places => {
    places.data.forEach(places => {
      let color;
      places.type === 'Coffee Shop' ? color = 'red' : color = 'blue'
      setMarker(places.location.coordinates[0], places.location.coordinates[1], theMap, places.name, color)
    });
  });

  function setMarker(lat, lng, theMap, title, color) {
    new google.maps.Marker({
      icon: `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
      position: {
          lat: lat,
          lng: lng
      },
      map: theMap,
      title: title
    });
}

}, false);
