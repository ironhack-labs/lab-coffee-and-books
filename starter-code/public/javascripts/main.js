let map;
const markers = [];

function getPlaces() {
  axios.get("/places/api")
   .then( response => {
     places(response.data.places);
   })
   .catch(error => {
     console.log(error);
   })
 }

 function places(places){
  console.log(places);
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

window.onload = () => {
  const ironhackBCN = {
    lat: -23, 
    lng: -46
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

getPlaces();
