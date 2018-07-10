document.addEventListener('DOMContentLoaded', () => {
  
  const center = {
    lat: 40.416775,
    lng: -3.703790
  };
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 15,
      center: center
    }
  );
  window.places.forEach( restaurant => {
    new google.maps.Marker({
      position: {
        lat: restaurant.location.coordinates[0],
        lng: restaurant.location.coordinates[1]
      },
      map: map,
      title: `${restaurant.name} - ${restaurant.description}`
    });
  })


}, false);