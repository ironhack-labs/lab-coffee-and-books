const directionsService = new google.maps.DirectionsService;
const directionsDisplay = new google.maps.DirectionsRenderer;

document.addEventListener('DOMContentLoaded', () => {
  

  var map;
  function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 43.5293, lng: -5.6773},
       zoom: 13,
     });
     var marker = new google.maps.Marker({
       position: {lat: 43.542194, lng: -5.676875},
       map: map,
 title: 'Acuario de Gijón'
     });
   }

   

}, false);

module.exports = map;