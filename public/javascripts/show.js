// const Place = require('../models/place');

function startMap(){

    const ironhackBCN = {
      lat: 41.386230, 
      lng: 2.174980
    };
  
    let markers = [];
  
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: ironhackBCN
    });
  
    let center = {
      lat: undefined,
      lng: undefined
    };
    
    function placePlaces(place){
      // places.forEach(function(place){
        const center = {
          lat: place.location.coordinates[0],
          lng: place.location.coordinates[1]
        };
        const pin = new google.maps.Marker({
          position: center,
          map: map,
          title: place.name
        });
        markers.push(pin);
        map.setCenter(center);
      // });
    }
  
  
    function getPlace() {
      axios.get("http://localhost:3000/api")
      .then( response => {
        res = response.data.places.find(e => {
          return e._id === document.getElementById('id').innerText;});
        console.log(res)
        placePlaces(res);
      })
      .catch(error => {
        next(error);
      });
    }
    getPlace()
  }
  
  startMap();