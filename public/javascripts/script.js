document.addEventListener('DOMContentLoaded', () => {

  const ironhackMadrid = {
    lat: 40.3923937,
    lng: -3.6987795
  };
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 15,
      center: ironhackMadrid,
      disableDefaultUI: true
    }
  );

  window.places.forEach(place => {
    new google.maps.Marker({
      position: {
        lat: place.location.coordinates[0],
        lng: place.location.coordinates[1]
      },
      map: map,
      title: `${place.name} - ${place.description}`
    });
  })

}, false);
