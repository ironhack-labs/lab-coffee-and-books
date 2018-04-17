document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

    const ironhack = {
      lat: 40.392088, 
      lng: -3.698473
    };
    
    const markers = []
    
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: ironhack
    });
  
    console.log(window.places);
}, false);
