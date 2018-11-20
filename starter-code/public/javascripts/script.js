document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');
  window.onload = () => {
    const ironhackBCN = {
      lat: 41.386230, 
      lng: 2.174980
    };
    
    const markers = []
    
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: ironhackBCN
    });
  
    let center = {
      lat: undefined,
      lng: undefined
    }; 
    // map.addListener("click", function (e) {
    //   window.chosenLocation = {
    //       lat: e.latLng.lat(),
    //       lng: e.latLng.lng()
    //   }
    //   console.log(window.chosenLocation.lat)
    //   marker.setPosition(chosenLocation);
  // })
    function getPlaces() {
      axios.get("/")
       .then( response => {
         placeCoffe(response.data.restaurants);
       })
       .catch(error => {
         console.log(error);
       })
     }

     function placeCoffe(place){
      place.forEach(function(place){
        const center = {
          lat: place.location.coordinates[1],
          lng: place.location.coordinates[0]
        };
        const pin = new google.maps.Marker({
          position: center,
          map: map,
          title: place.name
        });
        markers.push(pin);
      });
  }
  };

}, false);
