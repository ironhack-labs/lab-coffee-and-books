document.addEventListener('DOMContentLoaded', () => {
  function startMap() {
    const ironhackBCN = {
      lat: 40.939144,
      lng: -4.1196087};
    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 15,
        center: ironhackBCN
      }
    );
  }
  
  startMap();
  console.log('IronGenerator JS imported successfully!');

}, false);


