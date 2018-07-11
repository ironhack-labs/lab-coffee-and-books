document.addEventListener('DOMContentLoaded', () => {

  const madrid = {
    lat: 40.4381311,
    lng: -3.8196225,
  };
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 12,
      center: madrid
    }
  );

  window.places.forEach( Place => {
    new google.maps.Marker({
      position: {
        lat: Place.location.coordinates[0],
        lng: Place.location.coordinates[1]
      },
      map: map,
      title: `${Place.name} - ${Place.description}`
    });
  })


}, false);