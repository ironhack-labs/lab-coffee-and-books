document.addEventListener('DOMContentLoaded', () => {

  const Madrid = {
    lat: 40.4167,
    lng: -3.70325
  };
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 15,
      center: Madrid
    }
  );



  window.places2.forEach(place => {
    new google.maps.Marker({
      position: {
        lat: place.location.coordinates[0],
        lng: place.location.coordinates[1]
      },
      map: map,
      title: `${place.name}`
    });
  })
}, false);