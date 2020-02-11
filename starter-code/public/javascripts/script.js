document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

window.onload = () => {
  const submit = document.getElementById('submit')
  if(submit!== null){
    document.getElementById('submit').addEventListener('click', function () {
      geocodeAddress(geocoder, map);
    });}  
  };
  
  const micasa = {
    lat: 40.4020278, 
    lng: -3.7044117
  };
  
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: micasa
  });
  
  let center = {
    lat: undefined,
    lng: undefined
  }; 
   
  const markers = []

function getPlaces() {
  axios.get("/api")
   .then( response => {
    placePlaces(response.data.places);
   })
   .catch(error => {
     console.log(error);
   })
 }

 function placePlaces(places){
   console.log(places)
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
};

const geocoder = new google.maps.Geocoder();



function geocodeAddress(geocoder, resultsMap) {
  let address = document.getElementById('address').value;

  geocoder.geocode({ 'address': address }, function (results, status) {

    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      let marker = new google.maps.Marker({
        setMap: resultsMap,
        position: results[0].geometry.location
      });
      document.getElementById('latitude').value = results[0].geometry.location.lat();
      document.getElementById('longitude').value = results[0].geometry.location.lng();
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}


getPlaces();