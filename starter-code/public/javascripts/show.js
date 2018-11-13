window.onload = () => {
  function placePlaces(places) {
    places.data.forEach(function(place) {
      console.log(place.latitude);
      console.log(place.longitude);
    
      let center = {
        lat: undefined,
        lng: undefined
      };
    
      const markers = [];
      const localCenter = {
        lat: place.latitude,
        lng: place.longitude
      };
      console.log(localCenter)
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: localCenter
      });
      
      const pin = new google.maps.Marker({
        position: localCenter,
        map: map,
        title: place.name
      });
      markers.push(pin);
    });
  }

  function getPlaces() {
    axios
      .get("/places/api")
      .then(response => {
        console.log(response);
        placePlaces(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getPlaces();
};
     