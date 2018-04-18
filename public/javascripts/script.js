document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');
  function startMap() {
    const ironhackBCN = {
      lat: 40.392594,
      lng: -3.698263};  
    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 15,
        center: ironhackBCN
      }
    );
  }
  
  startMap();

}, false);