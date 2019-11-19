window.onload = () => {
    const ironhackMAD = {
      lat: 40.392509, 
      lng: -3.697049
    };
    
    const markers = []
    
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15.5,
      center: ironhackMAD
    });
  
    let center = {
      lat: undefined,
      lng: undefined
    }; 
    function getPlaces() {
        axios.get("/places/api")
         .then( response => {
             console.log(response)
           placePlaces(response.data.places);
         })
         .catch(error => {
           console.log(error);
         })
       }
       function placePlaces(places){
        places.forEach(function(place){
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
    
    getPlaces();
  };

  
  