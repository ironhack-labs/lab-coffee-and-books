// document.addEventListener('DOMContentLoaded', () => {

//   console.log('IronGenerator JS imported successfully!');

// }, false);

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
};

function getRestaurants() {
  axios.get("/showPlaces")
   .then( response => {
     placePlaces(response.data.places);
   })
   .catch(error => {
     console.log(error);
   })
 }

 function placePlaces(places){
   console.log(places);
  places.forEach(function(place){
    const center = {
      lat: place.location.lat,
      lng: place.location.lng
    };
    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: place.name
    });
    console.log (place.locatio.lat);
    markers.push(pin);
  });
}

getRestaurants();