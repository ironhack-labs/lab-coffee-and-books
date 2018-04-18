document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

  function startMap() {
    const ironhackMAD = {
      lat: 40.3925362,
      lng: -3.7004556};
      
    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 15,
        center: ironhackMAD
      }
    );

    const myMarker = new google.maps.Marker({
      position: {
        lat: 40.3925362,
        lng: -3.7004556
      },
      map: map,
      title: "I'm at Ironhack MADRID"
    });
  }
  
  startMap();
}, false);
