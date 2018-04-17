
document.addEventListener('DOMContentLoaded', () => {

    // main.js
  function startMap() {
    const ironhackMAD = {
      lat: 40.392467,
      lng: -3.698353
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: ironhackMAD
    });
    const myMarker = new google.maps.Marker({
      position: {
        lat: 40.3527614,
        lng: -3.9047505
      },
      map: map,
      title: "I'm here"
    });
  }
  
  
  startMap();
  
  
  }, false);