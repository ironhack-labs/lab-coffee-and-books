function startMap(){
    const ironhack = { 
      lat: 40.392604,
      lng: -3.698388
    };
  
  const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: ironhack
    });

    };
  // Centrado en Ironhack con un zoom 16