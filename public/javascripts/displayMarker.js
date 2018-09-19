document.addEventListener('DOMContentLoaded', () => {

const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 13,
});

window.places.forEach( place => {
  new google.maps.Marker({
    position: {
      lat: place.location.coordinates[0],
      lng: place.location.coordinates[1]
    },
    map: map,
    title: place.name,
    label: {
      text: place.description,
      fontSize: '20px',
      fontWeight: 'bolder'
    },
    color: 'blue',
    MarkerShape: {
      type: 'circle'
    }
  });
});

}, false);
