document.addEventListener(
  "DOMContentLoaded",
  () => {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      
    });

 
  
  geolocateMe()
    .then(center => map.setCenter(center))
    .catch(e => console.log(e))

    
  },
  false
);
