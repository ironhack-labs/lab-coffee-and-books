document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

const mapDOMElement = document.getElementById('map')
window.chosenLocation = null

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

function getPlaces() {
  axios.get("/place/api")
   .then( response => {
     places(response.data.place);
   })
   .catch(error => {
     console.log(error);
   })
 }


function places(place){
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

getPlaces();