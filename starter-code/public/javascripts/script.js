

const markers = []
const ironhackBCN = {
  lat: -23.5629083,
  lng: -46.6814647
};

const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 13,
  center: ironhackBCN
});


function getPlaces() {
  axios.get("/places/api")
   .then( response => {
     placePlaces(response.data.placeList);
   })
   .catch(error => {
     console.log(error);
   })
 }

 function placePlaces(places){
  places.forEach(function(places){
    const center = {
      lat: places.location.coordinates[1],
      lng: places.location.coordinates[0]
    };
    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: places.name
    });
    markers.push(pin);
  });
}

getPlaces();

