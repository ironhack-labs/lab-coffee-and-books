document.addEventListener('DOMContentLoaded', () => {
  
  const center = {
    lat: window.place.location.coordinates[0],
    lng: window.place.location.coordinates[1]
  };
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 15,
      center: center
    }
  );
  new google.maps.Marker({
    position: {
      lat: window.place.location.coordinates[0],
      lng: window.place.location.coordinates[1]
    },
    map: map,
    title: `${window.place.name} - ${window.place.type}`
  });

}, false);