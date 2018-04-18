document.addEventListener('DOMContentLoaded', () => {
  const ironhack = {
    lat: 40.392626,
    lng: -3.698251
  };

  const markers = []

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhack
  });

  const center = {
    lat: 40.392626,
    lng: -3.698251
  }; 




  console.log('IronGenerator JS imported successfully!');

}, false);
