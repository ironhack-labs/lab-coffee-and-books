function startMap() {
    var pariserPlatz = {
        lat: 52.5167493, 
        lng: 13.3797915};
    var map = new google.maps.Map(
      document.getElementById('map'), 
      {
        zoom: 15,
        center: pariserPlatz
      }
    );
  }
  
  startMap();