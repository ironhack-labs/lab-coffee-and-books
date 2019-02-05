document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
    

  
    function startMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: {lat:40.416775 , lng:-3.703790},
        zoom: 15
      });
    }

    let map;

    startMap();

    function showMarkers() {
      axios.get(`http://localhost:3000/place`).then(places => {
        places.data.forEach(place => {
          new google.maps.Marker({
            map: map,
            position: {
              lat: place.location.coords.lat,
              lng: place.location.coords.lng
            },
            title: place.name
          });
        });
      });
    }

    showMarkers();
  },
  false
);

